// Idiomas del selector de la web (no de la app Android).
// El manual se escribe y revisa en español; las demás lenguas se sirven con la
// traducción automática de Google Translate mediante un enlace a su proxy
// (translate.goog). El sitio no carga ningún script externo: solo enlaza.
//
// Cada código se verificó contra el proxy el 26 nov 2026 (capítulo 9 traducido).
// Excluidos por no funcionar entonces: bislama (bi) y wolof (wo, devolvía francés).
// `name` es el endónimo (cómo se llama la lengua en sí misma); `en` y `es` sirven
// para filtrar desde el buscador del selector. `hreflang` corrige códigos propios
// de Google (iw → he). `dir: 'rtl'` marca escrituras de derecha a izquierda.

const SITE_URL = 'https://manual-inversion.vercel.app/';
const SOURCE_LANG = 'es';

const GROUPS = [
  { id: 'global', title: 'Principales · Global' },
  { id: 'africa', title: 'África · Africa' },
  { id: 'oceania', title: 'Oceanía · Oceania' },
  { id: 'asia', title: 'Asia' },
  { id: 'europa', title: 'Europa · Europe' },
  { id: 'americas', title: 'Américas · Americas' },
];

const LANGUAGES = [
  // Principales
  { code: 'es', name: 'Español', en: 'Spanish (original)', es: 'Español (original)', group: 'global' },
  { code: 'en', name: 'English', en: 'English', es: 'Inglés', group: 'global' },
  { code: 'pt', name: 'Português', en: 'Portuguese', es: 'Portugués', group: 'global' },
  { code: 'fr', name: 'Français', en: 'French', es: 'Francés', group: 'global' },
  { code: 'de', name: 'Deutsch', en: 'German', es: 'Alemán', group: 'global' },
  { code: 'it', name: 'Italiano', en: 'Italian', es: 'Italiano', group: 'global' },
  { code: 'ru', name: 'Русский', en: 'Russian', es: 'Ruso', group: 'global' },
  { code: 'zh-CN', name: '简体中文', en: 'Chinese (Simplified)', es: 'Chino simplificado', group: 'global', hreflang: 'zh-Hans' },
  { code: 'zh-TW', name: '繁體中文', en: 'Chinese (Traditional)', es: 'Chino tradicional', group: 'global', hreflang: 'zh-Hant' },
  { code: 'ja', name: '日本語', en: 'Japanese', es: 'Japonés', group: 'global' },
  { code: 'ko', name: '한국어', en: 'Korean', es: 'Coreano', group: 'global' },
  { code: 'hi', name: 'हिन्दी', en: 'Hindi', es: 'Hindi', group: 'global' },
  { code: 'ar', name: 'العربية', en: 'Arabic', es: 'Árabe', group: 'global', dir: 'rtl' },
  { code: 'bn', name: 'বাংলা', en: 'Bengali', es: 'Bengalí', group: 'global' },
  { code: 'ur', name: 'اردو', en: 'Urdu', es: 'Urdu', group: 'global', dir: 'rtl' },
  { code: 'id', name: 'Bahasa Indonesia', en: 'Indonesian', es: 'Indonesio', group: 'global' },
  { code: 'tr', name: 'Türkçe', en: 'Turkish', es: 'Turco', group: 'global' },
  { code: 'fa', name: 'فارسی', en: 'Persian', es: 'Persa', group: 'global', dir: 'rtl' },
  { code: 'vi', name: 'Tiếng Việt', en: 'Vietnamese', es: 'Vietnamita', group: 'global' },

  // África
  { code: 'sw', name: 'Kiswahili', en: 'Swahili', es: 'Suajili', group: 'africa' },
  { code: 'am', name: 'አማርኛ', en: 'Amharic', es: 'Amhárico', group: 'africa' },
  { code: 'ha', name: 'Hausa', en: 'Hausa', es: 'Hausa', group: 'africa' },
  { code: 'yo', name: 'Yorùbá', en: 'Yoruba', es: 'Yoruba', group: 'africa' },
  { code: 'ig', name: 'Igbo', en: 'Igbo', es: 'Igbo', group: 'africa' },
  { code: 'zu', name: 'isiZulu', en: 'Zulu', es: 'Zulú', group: 'africa' },
  { code: 'xh', name: 'isiXhosa', en: 'Xhosa', es: 'Xhosa', group: 'africa' },
  { code: 'af', name: 'Afrikaans', en: 'Afrikaans', es: 'Afrikáans', group: 'africa' },
  { code: 'so', name: 'Soomaali', en: 'Somali', es: 'Somalí', group: 'africa' },
  { code: 'om', name: 'Afaan Oromoo', en: 'Oromo', es: 'Oromo', group: 'africa' },
  { code: 'ti', name: 'ትግርኛ', en: 'Tigrinya', es: 'Tigriña', group: 'africa' },
  { code: 'rw', name: 'Ikinyarwanda', en: 'Kinyarwanda', es: 'Kinyarwanda', group: 'africa' },
  { code: 'rn', name: 'Ikirundi', en: 'Kirundi', es: 'Kirundi', group: 'africa' },
  { code: 'ln', name: 'Lingála', en: 'Lingala', es: 'Lingala', group: 'africa' },
  { code: 'kg', name: 'Kikongo', en: 'Kongo', es: 'Kikongo', group: 'africa' },
  { code: 'lg', name: 'Luganda', en: 'Luganda', es: 'Luganda', group: 'africa' },
  { code: 'ak', name: 'Akan (Twi)', en: 'Akan (Twi)', es: 'Akan (twi)', group: 'africa' },
  { code: 'ee', name: 'Eʋegbe', en: 'Ewe', es: 'Ewe', group: 'africa' },
  { code: 'ff', name: 'Fulfulde', en: 'Fula', es: 'Fula', group: 'africa' },
  { code: 'ber', name: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', en: 'Tamazight', es: 'Tamazight (bereber)', group: 'africa' },
  { code: 'mg', name: 'Malagasy', en: 'Malagasy', es: 'Malgache', group: 'africa' },
  { code: 'st', name: 'Sesotho', en: 'Sesotho', es: 'Sesoto', group: 'africa' },
  { code: 'tn', name: 'Setswana', en: 'Tswana', es: 'Setsuana', group: 'africa' },
  { code: 'ts', name: 'Xitsonga', en: 'Tsonga', es: 'Tsonga', group: 'africa' },
  { code: 'sn', name: 'chiShona', en: 'Shona', es: 'Shona', group: 'africa' },
  { code: 'ny', name: 'Chichewa', en: 'Chichewa', es: 'Chichewa', group: 'africa' },

  // Oceanía
  { code: 'mi', name: 'Te reo Māori', en: 'Māori', es: 'Maorí', group: 'oceania' },
  { code: 'sm', name: 'Gagana Sāmoa', en: 'Samoan', es: 'Samoano', group: 'oceania' },
  { code: 'to', name: 'Lea fakatonga', en: 'Tongan', es: 'Tongano', group: 'oceania' },
  { code: 'fj', name: 'Vosa Vakaviti', en: 'Fijian', es: 'Fiyiano', group: 'oceania' },
  { code: 'haw', name: 'ʻŌlelo Hawaiʻi', en: 'Hawaiian', es: 'Hawaiano', group: 'oceania' },
  { code: 'ty', name: 'Reo Tahiti', en: 'Tahitian', es: 'Tahitiano', group: 'oceania' },
  { code: 'tpi', name: 'Tok Pisin', en: 'Tok Pisin', es: 'Tok pisin', group: 'oceania' },
  { code: 'ch', name: 'Chamoru', en: 'Chamorro', es: 'Chamorro', group: 'oceania' },
  { code: 'mh', name: 'Kajin M̧ajeļ', en: 'Marshallese', es: 'Marshalés', group: 'oceania' },
  { code: 'tet', name: 'Tetun', en: 'Tetum', es: 'Tetún', group: 'oceania' },

  // Asia
  { code: 'ta', name: 'தமிழ்', en: 'Tamil', es: 'Tamil', group: 'asia' },
  { code: 'te', name: 'తెలుగు', en: 'Telugu', es: 'Telugu', group: 'asia' },
  { code: 'mr', name: 'मराठी', en: 'Marathi', es: 'Maratí', group: 'asia' },
  { code: 'gu', name: 'ગુજરાતી', en: 'Gujarati', es: 'Guyaratí', group: 'asia' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', en: 'Punjabi', es: 'Panyabí', group: 'asia' },
  { code: 'ne', name: 'नेपाली', en: 'Nepali', es: 'Nepalí', group: 'asia' },
  { code: 'si', name: 'සිංහල', en: 'Sinhala', es: 'Cingalés', group: 'asia' },
  { code: 'th', name: 'ไทย', en: 'Thai', es: 'Tailandés', group: 'asia' },
  { code: 'my', name: 'မြန်မာ', en: 'Burmese', es: 'Birmano', group: 'asia' },
  { code: 'km', name: 'ខ្មែរ', en: 'Khmer', es: 'Jemer', group: 'asia' },
  { code: 'ms', name: 'Bahasa Melayu', en: 'Malay', es: 'Malayo', group: 'asia' },
  { code: 'tl', name: 'Filipino', en: 'Filipino', es: 'Filipino', group: 'asia', hreflang: 'fil' },
  { code: 'iw', name: 'עברית', en: 'Hebrew', es: 'Hebreo', group: 'asia', dir: 'rtl', hreflang: 'he' },
  { code: 'kk', name: 'Қазақ тілі', en: 'Kazakh', es: 'Kazajo', group: 'asia' },
  { code: 'uz', name: 'Oʻzbekcha', en: 'Uzbek', es: 'Uzbeko', group: 'asia' },
  { code: 'az', name: 'Azərbaycan dili', en: 'Azerbaijani', es: 'Azerí', group: 'asia' },
  { code: 'ka', name: 'ქართული', en: 'Georgian', es: 'Georgiano', group: 'asia' },
  { code: 'hy', name: 'Հայերեն', en: 'Armenian', es: 'Armenio', group: 'asia' },

  // Europa
  { code: 'pl', name: 'Polski', en: 'Polish', es: 'Polaco', group: 'europa' },
  { code: 'uk', name: 'Українська', en: 'Ukrainian', es: 'Ucraniano', group: 'europa' },
  { code: 'nl', name: 'Nederlands', en: 'Dutch', es: 'Neerlandés', group: 'europa' },
  { code: 'el', name: 'Ελληνικά', en: 'Greek', es: 'Griego', group: 'europa' },
  { code: 'sv', name: 'Svenska', en: 'Swedish', es: 'Sueco', group: 'europa' },
  { code: 'ro', name: 'Română', en: 'Romanian', es: 'Rumano', group: 'europa' },
  { code: 'cs', name: 'Čeština', en: 'Czech', es: 'Checo', group: 'europa' },
  { code: 'hu', name: 'Magyar', en: 'Hungarian', es: 'Húngaro', group: 'europa' },

  // Américas (lenguas originarias y criollas)
  { code: 'qu', name: 'Runa Simi', en: 'Quechua', es: 'Quechua', group: 'americas' },
  { code: 'gn', name: 'Avañeʼẽ', en: 'Guarani', es: 'Guaraní', group: 'americas' },
  { code: 'ay', name: 'Aymar aru', en: 'Aymara', es: 'Aimara', group: 'americas' },
  { code: 'ht', name: 'Kreyòl ayisyen', en: 'Haitian Creole', es: 'Criollo haitiano', group: 'americas' },
];

/** URL de la página `file` en el idioma `code` (el español es el original, sin proxy). */
function translatedUrl(code, file) {
  const original = SITE_URL + (file === 'index.html' ? '' : file);
  if (code === SOURCE_LANG) return original;
  return `https://translate.google.com/translate?sl=${SOURCE_LANG}&tl=${encodeURIComponent(code)}&hl=${encodeURIComponent(code)}&u=${encodeURIComponent(original)}`;
}

module.exports = { SITE_URL, SOURCE_LANG, GROUPS, LANGUAGES, translatedUrl };
