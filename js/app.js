/* =====================================================================
   SPECTRE STUDIO — app
   Все тексты сайта на двух языках — в объекте I18N ниже.
   ===================================================================== */
(() => {
  'use strict';

  const TG = 'https://t.me/hovatsavsem';
  const REVIEWS_URL = 'https://t.me/specreview';

  /* Категории: id, пропорции карточки, минимальная ширина в сетке */
  const CATS = [
    { id: 'avatars',    ratio: '1 / 1',  min: 'clamp(140px, 40vw, 230px)' },
    { id: 'banners',    ratio: '16 / 9', min: 'min(380px, 100%)' },
    { id: 'animations', ratio: '16 / 9', min: 'min(380px, 100%)' },
    { id: 'previews',   ratio: '16 / 9', min: 'min(330px, 100%)' },
    { id: 'bots',       ratio: '4 / 3',  min: 'min(320px, 100%)' },
  ];

  /* ---------------------------- ТЕКСТЫ ---------------------------- */
  const I18N = {
    ru: {
      'meta.title': 'SPECTRE STUDIO — дизайн-студия',
      'meta.desc': 'SPECTRE STUDIO — аватарки, баннеры, анимации, превью и Telegram-боты. Портфолио и отзывы.',
      'nav.works': 'Работы',
      'nav.process': 'Как заказать',
      'nav.reviews': 'Отзывы',
      'nav.contact': 'Контакты',
      'nav.order': 'Заказать',
      'hero.eyebrow': 'Дизайн-студия · принимаем заказы',
      'hero.sub': 'Аватарки, баннеры, анимации, превью и Telegram-боты. Делаем визуал, который цепляет с первого взгляда.',
      'hero.cta': 'Написать в Telegram',
      'hero.cta2': 'Смотреть работы',
      'hero.badge1': 'Быстрые сроки',
      'cat.avatars': 'Аватарки',
      'cat.banners': 'Баннеры',
      'cat.animations': 'Анимации',
      'cat.previews': 'Превью',
      'cat.bots': 'Боты / Системы',
      'works.kicker': 'Портфолио',
      'works.title': 'Наши работы',
      'works.sub': 'Наведите курсор или коснитесь карусели, чтобы её остановить. Нажмите на работу, чтобы открыть её целиком.',
      'works.empty': 'Скоро здесь появятся новые работы.',
      'works.emptyBots': 'Боты и системы под ваши задачи: опишите идею — предложим решение и сроки.',
      'works.botsCta': 'Обсудить проект',
      'works.open': 'Открыть',
      'works.video': 'ВИДЕО',
      'works.project': 'Открыть проект',
      'view.carousel': 'Карусель',
      'view.grid': 'Сетка',
      'process.kicker': 'Процесс',
      'process.title': 'Как заказать',
      'process.s1t': 'Напишите нам',
      'process.s1': 'Отправьте идею, референсы и пожелания в Telegram.',
      'process.s2t': 'Обсудим детали',
      'process.s2': 'Согласуем стиль, сроки и стоимость до начала работы.',
      'process.s3t': 'Получите результат',
      'process.s3': 'Готовая работа в нужных форматах и размерах.',
      'reviews.kicker': 'Отзывы',
      'reviews.title': 'Что говорят клиенты',
      'reviews.sub': 'Реальные отзывы из нашего Telegram-канала.',
      'reviews.note': '',
      'reviews.all': 'Все отзывы в Telegram',
      'reviews.anon': 'Аноним',
      'reviews.source': 'Открыть в Telegram',
      'contact.kicker': 'Контакты',
      'contact.title': 'Обсудим ваш проект?',
      'contact.sub': 'Пишите напрямую CEO студии в Telegram — ответим на вопросы, подскажем и рассчитаем стоимость.',
      'contact.cta': 'Написать @hovatsavsem',
      'contact.cta2': 'Канал с отзывами',
      'contact.offers': 'Предложения рассматриваю',
      'footer.rights': 'Все права защищены.',
      'footer.top': 'Наверх ↑',
      'lb.close': 'Закрыть',
      'lb.prev': 'Предыдущая работа',
      'lb.next': 'Следующая работа',
    },
    en: {
      'meta.title': 'SPECTRE STUDIO — design studio',
      'meta.desc': 'SPECTRE STUDIO — avatars, banners, animations, thumbnails and Telegram bots. Portfolio and client reviews.',
      'nav.works': 'Work',
      'nav.process': 'How to order',
      'nav.reviews': 'Reviews',
      'nav.contact': 'Contact',
      'nav.order': 'Order',
      'hero.eyebrow': 'Design studio · open for orders',
      'hero.sub': 'Avatars, banners, animations, thumbnails and Telegram bots. Visuals that grab attention at first glance.',
      'hero.cta': 'Message us on Telegram',
      'hero.cta2': 'View our work',
      'hero.badge1': 'Fast turnaround',
      'cat.avatars': 'Avatars',
      'cat.banners': 'Banners',
      'cat.animations': 'Animations',
      'cat.previews': 'Thumbnails',
      'cat.bots': 'Bots & Systems',
      'works.kicker': 'Portfolio',
      'works.title': 'Selected work',
      'works.sub': 'Hover over or tap the carousel to pause it. Tap or click any piece to see it in full.',
      'works.empty': 'New work is coming soon.',
      'works.emptyBots': 'Bots and systems built around your needs: describe your idea and we’ll propose a solution and a timeline.',
      'works.botsCta': 'Discuss a project',
      'works.open': 'Open',
      'works.video': 'VIDEO',
      'works.project': 'Open project',
      'view.carousel': 'Carousel',
      'view.grid': 'Grid',
      'process.kicker': 'Process',
      'process.title': 'How to order',
      'process.s1t': 'Message us',
      'process.s1': 'Send us your idea, references and wishes on Telegram.',
      'process.s2t': 'Agree on the details',
      'process.s2': 'We settle the style, timeline and price before any work begins.',
      'process.s3t': 'Get your result',
      'process.s3': 'Your finished piece, delivered in the formats and sizes you need.',
      'reviews.kicker': 'Reviews',
      'reviews.title': 'What our clients say',
      'reviews.sub': 'Real reviews from our Telegram channel.',
      'reviews.note': 'Translated from Russian.',
      'reviews.all': 'All reviews on Telegram',
      'reviews.anon': 'Anonymous',
      'reviews.source': 'View on Telegram',
      'contact.kicker': 'Contact',
      'contact.title': 'Let’s talk about your project',
      'contact.sub': 'Message the studio’s CEO directly on Telegram — we’ll answer your questions, offer advice and quote a price.',
      'contact.cta': 'Message @hovatsavsem',
      'contact.cta2': 'Reviews channel',
      'contact.offers': 'Open to offers',
      'footer.rights': 'All rights reserved.',
      'footer.top': 'Back to top ↑',
      'lb.close': 'Close',
      'lb.prev': 'Previous piece',
      'lb.next': 'Next piece',
    },
  };

  /* ---------------------------- helpers ---------------------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isVideo = (src) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src || '');
  const ICON_ZOOM = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICON_ARROW = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICON_QUOTE = '<svg class="rv-q" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.6 6C6.5 7.3 4.5 10 4.5 13.6V18h5.6v-5.4H7.3c.1-2 1.3-3.6 3.3-4.5L9.6 6Zm9.3 0c-3.1 1.3-5.1 4-5.1 7.6V18h5.6v-5.4h-2.8c.1-2 1.3-3.6 3.3-4.5L18.9 6Z"/></svg>';

  /* ---------------------------- language ---------------------------- */
  let lang = (() => {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ru' || q === 'en') return q;
    const s = store.get('spectre-lang');
    if (s === 'ru' || s === 'en') return s;
    return /^(ru|uk|be|kk)/i.test(navigator.language || '') ? 'ru' : 'en';
  })();
  const t = (k) => I18N[lang][k] ?? I18N.ru[k] ?? k;
  const pick = (obj, field) => (lang === 'en' ? obj[field + '_en'] ?? obj[field] : obj[field] ?? obj[field + '_en']) || '';

  /* ---------------------------- data ---------------------------- */
  const WORKS = (window.SPECTRE_WORKS || []).filter((w) => w && CATS.some((c) => c.id === w.cat));
  const REVIEWS = (window.SPECTRE_REVIEWS || []).filter((r) => r && r.ru);

  let curCat = CATS.find((c) => WORKS.some((w) => w.cat === c.id))?.id || CATS[0].id;
  let view = store.get('spectre-view') === 'grid' || reduced ? 'grid' : 'carousel';
  const marquees = { works: null, reviews: [] };

  /* =====================================================================
     Marquee — плавная бесконечная карусель:
     останавливается при наведении/касании, листается пальцем/мышью с инерцией.
     ===================================================================== */
  class Marquee {
    constructor(vp, track, { speed = 38, dir = -1 } = {}) {
      this.vp = vp; this.track = track; this.dir = dir;
      this.base = reduced ? 0 : speed; this.cur = this.base; this.target = this.base;
      this.x = 0; this.inertia = 0; this.drag = null; this.moved = false; this.visible = true;
      this.last = performance.now();
      this.measure();

      this.onEnter = (e) => { if (e.pointerType === 'mouse') this.target = 0; };
      this.onLeave = (e) => { if (e.pointerType === 'mouse' && !this.drag) this.target = this.base; };
      this.onDown = (e) => {
        if (e.button > 0) return;
        clearTimeout(this.resumeT);
        this.target = 0;
        this.drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, lx: e.clientX, lt: performance.now(), v: 0, type: e.pointerType };
        this.moved = false;
      };
      this.onMove = (e) => {
        const d = this.drag;
        if (!d || e.pointerId !== d.id) return;
        if (!this.moved) {
          const dx = Math.abs(e.clientX - d.sx), dy = Math.abs(e.clientY - d.sy);
          if (dx > 6 && dx > dy) { this.moved = true; this.vp.classList.add('dragging'); this.inertia = 0; }
          else return;
        }
        const now = performance.now(), dx = e.clientX - d.lx, dt = Math.max(1, now - d.lt);
        this.x += dx;
        d.v = d.v * 0.6 + (dx / dt) * 0.4;
        d.lx = e.clientX; d.lt = now;
      };
      this.onUp = (e) => {
        const d = this.drag;
        if (!d || e.pointerId !== d.id) return;
        if (this.moved) this.inertia = Math.max(-60, Math.min(60, d.v * 16));
        this.drag = null;
        this.vp.classList.remove('dragging');
        setTimeout(() => { this.moved = false; }, 60);
        const hovering = d.type === 'mouse' && this.vp.matches(':hover');
        if (!hovering) {
          clearTimeout(this.resumeT);
          this.resumeT = setTimeout(() => { this.target = this.base; }, d.type === 'mouse' ? 0 : 2200);
        }
      };
      this.onClickCapture = (e) => { if (this.moved) { e.preventDefault(); e.stopPropagation(); } };
      this.onFocusIn = () => { this.target = 0; };
      this.onFocusOut = () => { if (!this.vp.matches(':hover')) this.target = this.base; };

      vp.addEventListener('pointerenter', this.onEnter);
      vp.addEventListener('pointerleave', this.onLeave);
      vp.addEventListener('pointerdown', this.onDown);
      vp.addEventListener('click', this.onClickCapture, true);
      vp.addEventListener('dragstart', (e) => e.preventDefault());
      vp.addEventListener('focusin', this.onFocusIn);
      vp.addEventListener('focusout', this.onFocusOut);
      window.addEventListener('pointermove', this.onMove, { passive: true });
      window.addEventListener('pointerup', this.onUp);
      window.addEventListener('pointercancel', this.onUp);

      this.io = new IntersectionObserver(([en]) => { this.visible = en.isIntersecting; this.last = performance.now(); });
      this.io.observe(vp);
      this.tick = this.tick.bind(this);
      this.raf = requestAnimationFrame(this.tick);
    }
    measure() {
      const first = this.track.firstElementChild;
      const clone = this.track.querySelector('[data-loop]');
      this.loop = first && clone ? clone.offsetLeft - first.offsetLeft : 0;
    }
    tick(now) {
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      if (this.visible) {
        if (!this.drag) {
          this.cur += (this.target - this.cur) * Math.min(1, dt * 3.2);
          this.x += this.cur * this.dir * dt + this.inertia;
          this.inertia *= Math.pow(0.93, dt * 60);
          if (Math.abs(this.inertia) < 0.02) this.inertia = 0;
        }
        if (this.loop > 0) {
          while (this.x <= -this.loop) this.x += this.loop;
          while (this.x > 0) this.x -= this.loop;
        }
        this.track.style.transform = `translate3d(${this.x.toFixed(2)}px,0,0)`;
      }
      this.raf = requestAnimationFrame(this.tick);
    }
    destroy() {
      cancelAnimationFrame(this.raf);
      clearTimeout(this.resumeT);
      this.io.disconnect();
      window.removeEventListener('pointermove', this.onMove);
      window.removeEventListener('pointerup', this.onUp);
      window.removeEventListener('pointercancel', this.onUp);
    }
  }

  /* Заполняет дорожку копиями, чтобы лента была бесшовной на любой ширине */
  function fillTrack(track, makeItems) {
    const vpW = track.parentElement.clientWidth || window.innerWidth;
    let base = makeItems(false);
    base.forEach((n) => track.appendChild(n));
    let guard = 0;
    while (track.scrollWidth < vpW + 200 && guard++ < 12) {
      makeItems(true).forEach((n) => track.appendChild(n));
    }
    const set = [...track.children];
    set.forEach((n, i) => {
      const c = n.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      c.setAttribute('tabindex', '-1');
      $$('a, button', c).forEach((a) => a.setAttribute('tabindex', '-1'));
      if (i === 0) c.setAttribute('data-loop', '');
      track.appendChild(c);
    });
  }

  /* =====================================================================
     Works
     ===================================================================== */
  const stage = $('#stage');
  const tabs = $('#tabs');
  const tabInd = $('#tabInd');

  function catItems(id) { return WORKS.filter((w) => w.cat === id); }

  function workEl(item, index, cat, { hidden = false, grid = false } = {}) {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'work' + (item.cat === 'bots' && !item.src ? ' bot spot' : '');
    el.style.setProperty('--ratio', cat.ratio);
    el.dataset.index = index;
    if (hidden) { el.setAttribute('aria-hidden', 'true'); el.tabIndex = -1; }
    const title = pick(item, 'title');
    el.setAttribute('aria-label', `${t('works.open')}: ${title || t('cat.' + item.cat) + ' ' + (index + 1)}`);

    if (item.cat === 'bots' && !item.src) {
      el.innerHTML = botInner(item);
    } else if (isVideo(item.src)) {
      el.innerHTML = `<video src="${esc(item.src)}" ${item.poster ? `poster="${esc(item.poster)}"` : ''} muted loop playsinline preload="none"></video>
        <span class="w-badge">${t('works.video')}</span>
        <span class="w-info">${title ? `<span>${esc(title)}</span>` : ''}<span class="w-zoom">${ICON_ZOOM}</span></span>`;
    } else {
      el.innerHTML = `<img src="${esc(item.src)}" alt="${esc(title)}" ${grid ? 'loading="lazy"' : ''} decoding="async" draggable="false">
        <span class="w-info">${title ? `<span>${esc(title)}</span>` : ''}<span class="w-zoom">${ICON_ZOOM}</span></span>`;
    }
    return el;
  }

  function botInner(item, full = false) {
    const tags = (item.tags || []).map((x) => `<li>${esc(x)}</li>`).join('');
    const link = full && item.link ? `<a class="btn btn-ghost btn-sm" href="${esc(item.link)}" target="_blank" rel="noopener">${t('works.project')} ${ICON_ARROW}</a>` : '';
    return `<span class="bot-bar"><i></i><i></i><i></i><span>spectre ~/${esc(item.cat)}</span></span>
      <span class="bot-body">
        <h3>${esc(pick(item, 'title'))}</h3>
        <p>${esc(pick(item, 'text'))}</p>
        ${tags ? `<ul class="tags">${tags}</ul>` : ''}
        ${link}
      </span>`;
  }

  function renderTabs() {
    $$('.tab', tabs).forEach((n) => n.remove());
    CATS.forEach((c) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.setAttribute('role', 'tab');
      b.dataset.cat = c.id;
      b.setAttribute('aria-selected', String(c.id === curCat));
      b.innerHTML = `<span>${esc(t('cat.' + c.id))}</span><span class="count">${catItems(c.id).length}</span>`;
      b.addEventListener('click', () => selectCat(c.id));
      tabs.appendChild(b);
    });
    requestAnimationFrame(moveIndicator);
  }

  function moveIndicator() {
    const a = $(`.tab[data-cat="${curCat}"]`, tabs);
    if (!a) return;
    tabInd.style.width = a.offsetWidth + 'px';
    tabInd.style.transform = `translateX(${a.offsetLeft}px)`;
    const l = a.offsetLeft - tabs.scrollLeft, r = l + a.offsetWidth;
    if (l < 0 || r > tabs.clientWidth) tabs.scrollTo({ left: a.offsetLeft - 20, behavior: reduced ? 'auto' : 'smooth' });
  }

  function renderStage() {
    if (marquees.works) { marquees.works.destroy(); marquees.works = null; }
    stage.innerHTML = '';
    const cat = CATS.find((c) => c.id === curCat);
    const items = catItems(curCat);
    stage.setAttribute('aria-label', t('cat.' + curCat));

    if (!items.length) {
      stage.innerHTML = curCat === 'bots'
        ? `<div class="empty"><p>${esc(t('works.emptyBots'))}</p><a class="btn btn-primary" href="${TG}" target="_blank" rel="noopener">${esc(t('works.botsCta'))} ${ICON_ARROW}</a></div>`
        : `<div class="empty"><p>${esc(t('works.empty'))}</p></div>`;
      return;
    }

    if (view === 'grid') {
      const g = document.createElement('div');
      g.className = 'w-grid';
      g.style.setProperty('--min', cat.min);
      items.forEach((it, i) => {
        const el = workEl(it, i, cat, { grid: true });
        el.classList.add('reveal-item');
        el.style.setProperty('--i', Math.min(i, 12));
        g.appendChild(el);
      });
      stage.appendChild(g);
    } else {
      const vp = document.createElement('div');
      vp.className = 'marquee';
      const track = document.createElement('div');
      track.className = 'm-track';
      vp.appendChild(track);
      stage.appendChild(vp);
      fillTrack(track, (hidden) => items.map((it, i) => workEl(it, i, cat, { hidden })));
      marquees.works = new Marquee(vp, track, { speed: 42 });
    }
    watchVideos();
  }

  /* Видео играют только когда видны на экране — экономит трафик и батарею */
  let videoIO = null;
  function watchVideos() {
    videoIO?.disconnect();
    const vids = $$('video', stage);
    if (!vids.length) return;
    videoIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting) { v.muted = true; v.play().catch(() => {}); }
        else if (!v.paused) v.pause();
      });
    }, { threshold: 0.15 });
    vids.forEach((v) => videoIO.observe(v));
  }

  function selectCat(id, { scroll = false } = {}) {
    if (id === curCat && !scroll) return;
    curCat = id;
    $$('.tab', tabs).forEach((b) => b.setAttribute('aria-selected', String(b.dataset.cat === id)));
    moveIndicator();
    swapStage();
    if (scroll) $('#works').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }

  function swapStage() {
    if (reduced) { renderStage(); return; }
    stage.classList.add('swap');
    clearTimeout(swapStage.t);
    swapStage.t = setTimeout(() => {
      renderStage();
      requestAnimationFrame(() => stage.classList.remove('swap'));
    }, 220);
  }

  function setView(v) {
    view = v;
    store.set('spectre-view', v);
    $$('#viewToggle button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
    swapStage();
  }

  stage.addEventListener('click', (e) => {
    const w = e.target.closest('.work');
    if (!w || w.closest('a')) return;
    openLightbox(catItems(curCat), +w.dataset.index);
  });

  /* =====================================================================
     Lightbox
     ===================================================================== */
  const lb = $('#lightbox');
  const lbMedia = $('#lbMedia');
  let lbItems = [], lbIndex = 0, lbReturn = null;

  function openLightbox(items, index) {
    lbItems = items; lbIndex = index; lbReturn = document.activeElement;
    Object.values(marquees).flat().forEach((m) => m && (m.target = 0));
    renderLightbox();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-lock');
    $('.lb-close', lb).focus({ preventScroll: true });
  }
  function closeLightbox() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-lock');
    setTimeout(() => { if (!lb.classList.contains('open')) lbMedia.innerHTML = ''; }, 350);
    if (marquees.works && !marquees.works.vp.matches(':hover')) marquees.works.target = marquees.works.base;
    marquees.reviews.forEach((m) => { m.target = m.base; });
    lbReturn?.focus?.({ preventScroll: true });
  }
  function renderLightbox() {
    const it = lbItems[lbIndex];
    if (!it) return;
    const title = pick(it, 'title');
    if (it.cat === 'bots' && !it.src) {
      lbMedia.innerHTML = `<div class="work bot">${botInner(it, true)}</div>`;
    } else if (isVideo(it.src)) {
      lbMedia.innerHTML = `<video src="${esc(it.src)}" ${it.poster ? `poster="${esc(it.poster)}"` : ''} controls autoplay loop muted playsinline></video>`;
    } else {
      lbMedia.innerHTML = `<img src="${esc(it.src)}" alt="${esc(title)}">`;
    }
    $('#lbTitle').textContent = title || t('cat.' + it.cat);
    $('#lbCount').textContent = lbItems.length > 1 ? `${lbIndex + 1} / ${lbItems.length}` : '';
    const multi = lbItems.length > 1;
    $('.lb-prev', lb).hidden = !multi;
    $('.lb-next', lb).hidden = !multi;
  }
  function step(d) {
    if (lbItems.length < 2) return;
    lbIndex = (lbIndex + d + lbItems.length) % lbItems.length;
    renderLightbox();
  }
  $('.lb-close', lb).addEventListener('click', closeLightbox);
  $('.lb-prev', lb).addEventListener('click', () => step(-1));
  $('.lb-next', lb).addEventListener('click', () => step(1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-figure') || e.target === lbMedia) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'Tab') {
      const f = $$('button:not([hidden]), a[href], video[controls]', lb);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  let swipe = null;
  lb.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') swipe = { x: e.clientX, y: e.clientY }; });
  lb.addEventListener('pointerup', (e) => {
    if (!swipe) return;
    const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
    swipe = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) step(dx < 0 ? 1 : -1);
  });

  /* =====================================================================
     Reviews
     ===================================================================== */
  const rvRows = $('#reviewsRows');
  const fmtDate = (d) => {
    try { return new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { month: 'long', year: 'numeric' }).format(new Date(d + 'T12:00:00')); }
    catch (e) { return d; }
  };
  function reviewEl(r, hidden) {
    const el = document.createElement('article');
    el.className = 'review spot';
    if (hidden) el.setAttribute('aria-hidden', 'true');
    const name = r.name || t('reviews.anon');
    const letter = (name.match(/[\p{L}\p{N}]/u) || ['S'])[0].toUpperCase();
    const text = lang === 'en' ? (r.en || r.ru) : r.ru;
    el.innerHTML = `
      <header class="rv-head">
        <span class="rv-ava" aria-hidden="true">${esc(letter)}</span>
        <span style="min-width:0"><p class="rv-name">${esc(name)}</p><p class="rv-date">${esc(fmtDate(r.date))}</p></span>
        ${ICON_QUOTE}
      </header>
      <p class="rv-text">${esc(text)}</p>
      ${r.id ? `<a class="rv-link" href="${REVIEWS_URL}/${encodeURIComponent(r.id)}" target="_blank" rel="noopener" ${hidden ? 'tabindex="-1"' : ''}>${esc(t('reviews.source'))} ${ICON_ARROW}</a>` : ''}`;
    return el;
  }
  function renderReviews() {
    marquees.reviews.forEach((m) => m.destroy());
    marquees.reviews = [];
    rvRows.innerHTML = '';
    if (!REVIEWS.length) return;
    const rows = REVIEWS.length >= 8 ? [REVIEWS.filter((_, i) => i % 2 === 0), REVIEWS.filter((_, i) => i % 2 === 1)] : [REVIEWS];
    rows.forEach((list, ri) => {
      const vp = document.createElement('div');
      vp.className = 'marquee';
      const track = document.createElement('div');
      track.className = 'm-track';
      track.style.alignItems = 'stretch';
      vp.appendChild(track);
      rvRows.appendChild(vp);
      fillTrack(track, (hidden) => list.map((r) => reviewEl(r, hidden)));
      marquees.reviews.push(new Marquee(vp, track, { speed: 30, dir: ri % 2 ? 1 : -1 }));
    });
  }

  /* =====================================================================
     Static pieces: ticker, hero chips, texts
     ===================================================================== */
  function renderTicker() {
    const words = CATS.map((c) => `<span>${esc(t('cat.' + c.id))}</span><i>✦</i>`).join('');
    $('#ticker').innerHTML = words + words + words + words;
  }
  function renderHeroCats() {
    const ul = $('#heroCats');
    ul.innerHTML = CATS.map((c) => `<li><button type="button" data-cat="${c.id}">${esc(t('cat.' + c.id))}</button></li>`).join('');
  }
  $('#heroCats').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-cat]');
    if (b) selectCat(b.dataset.cat, { scroll: true });
  });

  function applyTexts() {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    $('meta[name="description"]').setAttribute('content', t('meta.desc'));
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    const sw = $('#lang');
    sw.dataset.active = lang;
    $$('button', sw).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  function setLang(l, first = false) {
    if (!first && l === lang) return;
    lang = l;
    store.set('spectre-lang', l);
    applyTexts();
    renderTicker();
    renderHeroCats();
    renderTabs();
    renderStage();
    renderReviews();
    if (lb.classList.contains('open')) renderLightbox();
  }
  $$('#lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  $$('#viewToggle button').forEach((b) => b.addEventListener('click', () => { if (b.dataset.view !== view) setView(b.dataset.view); }));

  /* =====================================================================
     Effects: hero letters, reveal, header, tilt, magnetic, spotlight
     ===================================================================== */
  let ci = 0;
  $$('[data-split]').forEach((line) => {
    const txt = line.textContent.trim();
    line.setAttribute('aria-hidden', 'true');
    line.innerHTML = [...txt].map((ch) => `<span class="char" style="--i:${ci++}">${esc(ch)}</span>`).join('');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => io.observe(el));

  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger');
  burger.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('#navLinks a').forEach((a) => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
  document.addEventListener('click', (e) => { if (nav.classList.contains('open') && !nav.contains(e.target)) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });

  if (finePointer && !reduced) {
    const hv = $('#heroVisual'), tilt = $('#tilt');
    hv.addEventListener('pointermove', (e) => {
      const r = hv.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 16}deg) scale(1.02)`;
      tilt.style.setProperty('--gx', `${(px + 0.5) * 100}%`);
      tilt.style.setProperty('--gy', `${(py + 0.5) * 100}%`);
    });
    hv.addEventListener('pointerleave', () => { tilt.style.transform = ''; });

    $$('.magnetic').forEach((m) => {
      m.addEventListener('pointermove', (e) => {
        const r = m.getBoundingClientRect();
        m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      m.addEventListener('pointerleave', () => { m.style.transform = ''; });
    });

    document.addEventListener('pointermove', (e) => {
      const s = e.target.closest?.('.spot');
      if (!s) return;
      const r = s.getBoundingClientRect();
      s.style.setProperty('--mx', `${e.clientX - r.left}px`);
      s.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  let lastW = innerWidth;
  addEventListener('resize', () => {
    clearTimeout(onresize.t);
    onresize.t = setTimeout(() => {
      moveIndicator();
      if (Math.abs(innerWidth - lastW) < 40) return;
      lastW = innerWidth;
      if (view === 'carousel') renderStage();
      renderReviews();
    }, 200);
  });
  function onresize() {}

  $('#year').textContent = new Date().getFullYear();

  /* init */
  $$('#viewToggle button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
  setLang(lang, true);
  document.fonts?.ready.then(() => { moveIndicator(); marquees.works?.measure(); marquees.reviews.forEach((m) => m.measure()); });
})();
