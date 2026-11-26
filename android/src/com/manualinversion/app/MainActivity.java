package com.manualinversion.app;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.Insets;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

/**
 * Lector sin conexión del manual: el sitio estático generado en site/ viaja
 * dentro del APK (assets/site) y se abre en un WebView local. No pide permiso
 * de Internet; los enlaces externos se delegan al navegador del sistema.
 */
public class MainActivity extends Activity {
    private static final String ASSET_ROOT = "file:///android_asset/site/";
    private static final String HOME = ASSET_ROOT + "index.html";
    private static final String PREFS = "lector";
    private static final String LAST_URL = "ultima_pagina";
    private static final String DARK_BG = "#111917";
    private static final String LIGHT_BG = "#f4f1e9";

    /** Une el sitio con la app: imprimir con el sistema y seguir el tema claro/oscuro. */
    private static final String BRIDGE_JS =
        "(function(){" +
        "if(window.__manualApp)return;window.__manualApp=true;" +
        "window.print=function(){AndroidApp.print(document.title||'Manual de inversión');};" +
        "var r=document.documentElement;" +
        "function s(){AndroidApp.setTheme(r.getAttribute('data-theme')||'dark');}" +
        "s();new MutationObserver(s).observe(r,{attributes:true,attributeFilter:['data-theme']});" +
        "})();";

    private WebView webView;
    private FrameLayout root;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        root = new FrameLayout(this);
        root.setBackgroundColor(Color.parseColor(DARK_BG));
        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor(DARK_BG));
        root.addView(webView, new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        setupSystemBars();

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);          // tema elegido (localStorage "manual-theme")
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setSupportZoom(true);
        settings.setUserAgentString(settings.getUserAgentString() + " ManualInversionApp/1");

        webView.addJavascriptInterface(new Bridge(), "AndroidApp");
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String scheme = uri.getScheme() == null ? "" : uri.getScheme();
                if ("file".equals(scheme) && uri.toString().startsWith(ASSET_ROOT)) return false;
                openExternally(uri);
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                view.evaluateJavascript(BRIDGE_JS, null);
                if (url != null && url.startsWith(ASSET_ROOT)) {
                    getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putString(LAST_URL, url).apply();
                }
            }
        });

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            String last = getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString(LAST_URL, HOME);
            webView.loadUrl(last != null && last.startsWith(ASSET_ROOT) ? last : HOME);
        }
    }

    private void openExternally(Uri uri) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, uri));
        } catch (ActivityNotFoundException ignored) {
            // Sin aplicación capaz de abrir el enlace: se ignora.
        }
    }

    /** Barras del sistema del color del fondo; en Android 11+ el contenido respeta los recortes. */
    private void setupSystemBars() {
        Window window = getWindow();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.setDecorFitsSystemWindows(false);
            window.setStatusBarColor(Color.TRANSPARENT);
            window.setNavigationBarColor(Color.TRANSPARENT);
            root.setOnApplyWindowInsetsListener((v, insets) -> {
                Insets bars = insets.getInsets(WindowInsets.Type.systemBars()
                    | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                v.setPadding(bars.left, bars.top, bars.right, bars.bottom);
                return WindowInsets.CONSUMED;
            });
        }
        applyTheme("dark");
    }

    @SuppressWarnings("deprecation")
    private void applyTheme(String theme) {
        boolean light = "light".equals(theme);
        int bg = Color.parseColor(light ? LIGHT_BG : DARK_BG);
        root.setBackgroundColor(bg);
        webView.setBackgroundColor(bg);
        Window window = getWindow();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            WindowInsetsController controller = window.getInsetsController();
            if (controller != null) {
                int mask = WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS
                    | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS;
                controller.setSystemBarsAppearance(light ? mask : 0, mask);
            }
        } else {
            window.setStatusBarColor(bg);
            window.setNavigationBarColor(bg);
            View decor = window.getDecorView();
            int flags = decor.getSystemUiVisibility();
            int lightFlags = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
            decor.setSystemUiVisibility(light ? (flags | lightFlags) : (flags & ~lightFlags));
        }
    }

    private void printPage(String title) {
        PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
        if (printManager == null) return;
        String jobName = title == null || title.isEmpty() ? getString(R.string.app_name) : title;
        PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter(jobName);
        PrintAttributes attributes = new PrintAttributes.Builder()
            .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
            .build();
        printManager.print(jobName, adapter, attributes);
    }

    public final class Bridge {
        @JavascriptInterface
        public void print(final String title) {
            runOnUiThread(() -> printPage(title));
        }

        @JavascriptInterface
        public void setTheme(final String theme) {
            runOnUiThread(() -> applyTheme(theme));
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        webView.saveState(outState);
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.removeJavascriptInterface("AndroidApp");
            webView.destroy();
        }
        super.onDestroy();
    }
}
