/* =====================================================================
   РАБОТЫ SPECTRE STUDIO

   КАК ДОБАВИТЬ РАБОТУ (2 шага):
   1) Загрузите файл в папку works/<категория>/
      • картинки: .webp / .jpg / .png (лучше до ~500 КБ)
      • анимации: .mp4 (до ~5 МБ) или .gif
      • имя файла — латиницей, без пробелов: dengiz.webp, lavina.mp4
   2) Скопируйте любую строку ниже, вставьте в нужную категорию
      и поменяйте путь в src. Не забудьте запятую в конце строки.

   Категории (cat):
     avatars    — Аватарки
     banners    — Баннеры
     animations — Анимации
     previews   — Превью
     bots       — Боты / Системы

   Поля:
     src       — путь к файлу (обязательно, кроме ботов)
     poster    — картинка-обложка для видео (необязательно)
     title     — подпись на русском (необязательно)
     title_en  — подпись на английском (необязательно, иначе берётся title)
     Только для ботов / систем:
     text, text_en — описание проекта
     tags          — технологии, например ["Python", "aiogram"]
     link          — ссылка на бота или проект (необязательно)

   Порядок строк = порядок работ на сайте.
   ===================================================================== */

window.SPECTRE_WORKS = [

  /* ---------------- АВАТАРКИ ---------------- */
  { cat: "avatars", src: "assets/logo.webp" },
  { cat: "avatars", src: "works/avatars/alliance-vip.webp" },
  { cat: "avatars", src: "works/avatars/dengiz.webp" },
  { cat: "avatars", src: "works/avatars/444-boutique.webp" },
  { cat: "avatars", src: "works/avatars/virts.webp" },

  /* ---------------- БАННЕРЫ ---------------- */
  { cat: "banners", src: "works/banners/perehodnik-keln.webp" },
  { cat: "banners", src: "works/banners/uslugi.webp" },
  { cat: "banners", src: "works/banners/obmen-valyut.webp" },

  /* ---------------- АНИМАЦИИ ---------------- */
  { cat: "animations", src: "works/animations/karamelnye-ceny.mp4", poster: "works/animations/karamelnye-ceny-poster.webp" },
  { cat: "animations", src: "works/animations/glitch.mp4",          poster: "works/animations/glitch-poster.webp" },
  { cat: "animations", src: "works/animations/lavina.mp4",          poster: "works/animations/lavina-poster.webp" },

  /* ---------------- ПРЕВЬЮ ---------------- */
  { cat: "previews", src: "works/previews/silovye-leva2k.webp" },
  { cat: "previews", src: "works/previews/pulse.webp" },
  { cat: "previews", src: "works/previews/norm-bred-absurd.webp" },
  { cat: "previews", src: "works/previews/avtorynok.webp" },
  { cat: "previews", src: "works/previews/silovye-basta.webp" },
  { cat: "previews", src: "works/previews/dubai.webp" },
  { cat: "previews", src: "works/previews/georgia.webp" },

  /* ---------------- БОТЫ / СИСТЕМЫ ----------------
     Пока пусто — на сайте показывается кнопка «Обсудить проект».
     Шаблон (уберите // в начале строк и заполните):
  // {
  //   cat: "bots",
  //   title: "Бот для магазина",
  //   title_en: "Shop bot",
  //   text: "Что умеет бот…",
  //   text_en: "What the bot does…",
  //   tags: ["Python", "aiogram"],
  //   link: "https://t.me/your_bot",
  //   src: "works/bots/screenshot.webp"   // необязательно
  // },
  */

];
