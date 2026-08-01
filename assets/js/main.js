/* ============================================================================
   GANACHE SAFARIS — SITE ENGINE
   Builds the shared header/footer, injects your contact details everywhere,
   renders the journeys / destinations / FAQs from site-data.js, and powers
   the enquiry form + WhatsApp links.

   You should not need to edit this file for normal content changes.
   Change wording and business details in  assets/js/site-data.js  instead.
   ========================================================================== */
(function () {
  "use strict";
  var D = window.SITE_DATA || {};
  var B = D.business || {};

  /* -------- small helpers ------------------------------------------------ */
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function $(s, c) { return (c || document).querySelector(s); }
  function $all(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m]; }); }

  // Build a WhatsApp link with an optional pre-filled message
  function waLink(message) {
    var base = "https://wa.me/" + (B.whatsappNumber || "");
    return message ? base + "?text=" + encodeURIComponent(message) : base;
  }
  window.GANACHE_WA = waLink; // available to inline handlers if ever needed

  /* -------- SVG icons ---------------------------------------------------- */
  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 6.3A7.9 7.9 0 0 0 12 4a7.9 7.9 0 0 0-6.8 11.9L4 20l4.2-1.1A7.9 7.9 0 0 0 12 20a7.9 7.9 0 0 0 5.6-13.7ZM12 18.5c-1.2 0-2.4-.3-3.4-.9l-.24-.15-2.5.66.67-2.43-.16-.25A6.5 6.5 0 1 1 12 18.5Zm3.6-4.9c-.2-.1-1.16-.57-1.34-.64s-.31-.1-.44.1-.5.64-.62.77-.23.15-.43.05a5.3 5.3 0 0 1-1.56-.96 5.9 5.9 0 0 1-1.08-1.35c-.11-.2 0-.3.09-.4l.3-.35c.1-.12.13-.2.2-.34s0-.25 0-.35-.44-1.06-.6-1.45c-.16-.38-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.78 3.78 0 0 0 .8 2 8.7 8.7 0 0 0 3.33 2.94c.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.16-.47 1.32-.93s.17-.85.12-.93-.18-.15-.38-.25Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h6"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16Z"/><path d="M4 20c3-3 5-5 9-7"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>'
  };

  /* -------- navigation model -------------------------------------------- */
  var NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "about", label: "About Us", href: "about.html" },
    { key: "safaris", label: "Safaris & Tours", href: "safaris.html" },
    { key: "destinations", label: "Destinations", href: "destinations.html" },
    { key: "experiences", label: "Experiences", href: "experiences.html" },
    { key: "accommodations", label: "Accommodations", href: "accommodations.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ];

  /* ====================================================================== */
  /*  HEADER                                                                 */
  /* ====================================================================== */
  function buildHeader() {
    var mount = $("#site-header");
    if (!mount) return;
    var page = document.body.getAttribute("data-page") || "";
    var links = NAV.map(function (n) {
      var cur = n.key === page ? ' aria-current="page"' : "";
      return '<a class="nav-link" href="' + n.href + '"' + cur + '>' + esc(n.label) + "</a>";
    }).join("");

    mount.innerHTML =
      '<div class="container">' +
        '<a class="brand" href="index.html" aria-label="' + esc(B.name) + ' home">' +
          '<span class="brand__logo">' +
            '<img class="brand__logo-img brand__logo-img--dark" src="assets/images/brand/logo-mark.png" alt="" width="62" height="44">' +
            '<img class="brand__logo-img brand__logo-img--light" src="assets/images/brand/logo-mark-white.png" alt="" width="62" height="44">' +
          '</span>' +
          '<span class="brand__text"><span class="brand__name">' + esc(B.name) + '</span>' +
          '<span class="brand__tag">Arusha · Tanzania</span></span>' +
        '</a>' +
        '<nav class="primary-nav" id="primary-nav" aria-label="Primary">' +
          links +
          '<a class="btn btn--ochre nav-cta" href="plan.html">Plan Your Safari</a>' +
        '</nav>' +
        '<button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    var header = mount;
    var toggle = $("#nav-toggle");
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // close menu when a link is tapped
    $all(".nav-link, .nav-cta", mount).forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    // Esc closes menu
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    // transparent-over-hero behaviour
    var hasHero = document.body.getAttribute("data-hero") === "true";
    function onScroll() {
      var solid = !hasHero || window.scrollY > 40 || document.body.classList.contains("menu-open");
      header.classList.toggle("site-header--solid", solid);
      header.classList.toggle("site-header--transparent", !solid);
    }
    header.classList.add(hasHero ? "site-header--transparent" : "site-header--solid");
    if (hasHero) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    // when menu opens on mobile we want solid look
    new MutationObserver(onScroll).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }

  /* ====================================================================== */
  /*  FOOTER                                                                 */
  /* ====================================================================== */
  function buildFooter() {
    var mount = $("#site-footer");
    if (!mount) return;
    var exp = (D.experiences || []).slice(0, 6).map(function (e) {
      return '<li><a href="experiences.html#' + esc(e.id) + '">' + esc(e.title) + "</a></li>";
    }).join("");
    var social = "";
    if (B.instagramUrl) social += '<a href="' + esc(B.instagramUrl) + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.instagram + "</a>";
    if (B.facebookUrl) social += '<a href="' + esc(B.facebookUrl) + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.facebook + "</a>";
    social += '<a href="' + waLink("Hello Ganache Safaris, I would like to plan a Tanzania trip.") + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICON.whatsapp + "</a>";

    mount.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<img class="footer-brand__logo" src="assets/images/brand/logo-full-white.png" alt="' + esc(B.name) + '" width="200" height="230">' +
            '<p>A locally owned safari company based in Arusha, planning personal, unhurried journeys across Tanzania — wildlife, mountains, culture, adventure and coast.</p>' +
            '<div class="footer-social">' + social + "</div>" +
          "</div>" +
          '<div class="footer-col"><h4>Explore</h4><ul>' +
            NAV.slice(1).map(function (n) { return '<li><a href="' + n.href + '">' + esc(n.label) + "</a></li>"; }).join("") +
          "</ul></div>" +
          '<div class="footer-col"><h4>Experiences</h4><ul>' + exp + "</ul></div>" +
          '<div class="footer-col">' +
            '<h4>Contact</h4>' +
            '<ul class="footer-contact">' +
              "<li>" + ICON.pin + "<span>" + esc(B.baseLocation) + "</span></li>" +
              '<li>' + ICON.phone + '<a href="tel:' + esc(B.phoneLink) + '">' + esc(B.phoneDisplay) + "</a></li>" +
              '<li>' + ICON.mail + '<a href="mailto:' + esc(B.email) + '">' + esc(B.email) + "</a></li>" +
              '<li>' + ICON.instagram + '<a href="' + esc(B.instagramUrl) + '" target="_blank" rel="noopener">' + esc(B.instagramHandle) + "</a></li>" +
            "</ul>" +
            '<div class="footer-cta mt-2"><h4>Start planning</h4><p>Tell us your dates and what you enjoy.</p>' +
              '<a class="btn btn--ochre btn--sm btn--block" href="plan.html">Plan Your Safari</a></div>' +
          "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© " + new Date().getFullYear() + " " + esc(B.name) + ". All rights reserved.</span>" +
          '<nav aria-label="Footer"><a href="plan.html">Plan Your Safari</a><a href="contact.html">Contact</a>' +
          '<a href="PHOTO-CREDITS.md">Photo credits</a><a href="privacy.html">Privacy</a></nav>' +
        "</div>" +
      "</div>";
  }

  /* ====================================================================== */
  /*  FLOATING WHATSAPP                                                      */
  /* ====================================================================== */
  function buildFloatWA() {
    if ($(".wa-float")) return;
    var a = el(
      '<a class="wa-float" href="' + waLink("Hello Ganache Safaris, I am interested in planning a Tanzania safari and would like to know more.") +
      '" target="_blank" rel="noopener" aria-label="Chat with Ganache Safaris on WhatsApp">' +
      ICON.whatsapp + '<span class="wa-float__label">Chat on WhatsApp</span></a>'
    );
    document.body.appendChild(a);
  }

  /* ====================================================================== */
  /*  INJECT BUSINESS DETAILS into any [data-biz] element                    */
  /* ====================================================================== */
  function injectBiz() {
    $all("[data-biz]").forEach(function (node) {
      var type = node.getAttribute("data-biz");
      var msg = node.getAttribute("data-wa-message") || "";
      switch (type) {
        case "phone-link": node.setAttribute("href", "tel:" + B.phoneLink); if (!node.textContent.trim()) node.textContent = B.phoneDisplay; break;
        case "phone-text": node.textContent = B.phoneDisplay; break;
        case "email-link": node.setAttribute("href", "mailto:" + B.email); if (!node.textContent.trim()) node.textContent = B.email; break;
        case "email-text": node.textContent = B.email; break;
        case "wa-link": node.setAttribute("href", waLink(msg)); node.setAttribute("target", "_blank"); node.setAttribute("rel", "noopener"); break;
        case "instagram-link": node.setAttribute("href", B.instagramUrl); node.setAttribute("target", "_blank"); node.setAttribute("rel", "noopener"); if (!node.textContent.trim()) node.textContent = B.instagramHandle; break;
        case "location": node.textContent = B.baseLocation; break;
        case "name": node.textContent = B.name; break;
      }
    });
    // fill any element with a specific icon slot
    $all("[data-icon]").forEach(function (n) { var k = n.getAttribute("data-icon"); if (ICON[k]) n.innerHTML = ICON[k]; });
  }

  /* ====================================================================== */
  /*  RENDERERS                                                              */
  /* ====================================================================== */
  var CAT_LABELS = { safari: "Wildlife Safari", walking: "Walking & Wildlife", culture: "Culture & Conservation", adventure: "Adventure Combo" };

  function renderExperiences() {
    var m = $("#experience-cards"); if (!m) return;
    m.innerHTML = (D.experiences || []).map(function (e) {
      var msg = "Hello Ganache Safaris, I would like to know more about " + e.title + ".";
      return '<article class="card reveal" id="' + esc(e.id) + '">' +
        '<div class="card__media"><img src="' + esc(e.image) + '" alt="' + esc(e.title) + ' in Tanzania" loading="lazy"></div>' +
        '<div class="card__body"><h3 class="card__title">' + esc(e.title) + "</h3>" +
        '<p class="card__text">' + esc(e.short) + "</p>" +
        '<a class="card__link" href="experiences.html#' + esc(e.id) + '">Explore ' + ICON.arrow + "</a></div></article>";
    }).join("");
  }

  function journeyCardHTML(j) {
    return '<article class="card reveal" data-category="' + esc(j.category) + '">' +
      '<div class="card__media"><img src="' + esc(j.image) + '" alt="' + esc(j.title) + '" loading="lazy">' +
      '<span class="card__tag">' + esc(CAT_LABELS[j.category] || j.category) + "</span></div>" +
      '<div class="card__body">' +
      '<p class="card__meta">' + esc(j.location) + "</p>" +
      '<h3 class="card__title">' + esc(j.title) + "</h3>" +
      '<p class="card__text">' + esc(j.summary) + "</p>" +
      '<p class="pill" style="align-self:flex-start;margin-bottom:1rem">' + esc(j.style) + "</p>" +
      '<a class="card__link" href="journey.html?id=' + encodeURIComponent(j.id) + '">View journey ' + ICON.arrow + "</a>" +
      "</div></article>";
  }

  function renderJourneys(mountId, limit) {
    var m = document.getElementById(mountId); if (!m) return;
    var list = (D.journeys || []).slice(0, limit || 999);
    m.innerHTML = list.map(journeyCardHTML).join("");
  }

  function renderDestinations() {
    var m = $("#destination-cards"); if (!m) return;
    m.innerHTML = (D.destinations || []).map(function (d) {
      return '<article class="card reveal" id="' + esc(d.id) + '">' +
        '<div class="card__media"><img src="' + esc(d.image) + '" alt="' + esc(d.name) + '" loading="lazy"></div>' +
        '<div class="card__body"><h3 class="card__title">' + esc(d.name) + "</h3>" +
        '<p class="card__text">' + esc(d.overview) + "</p>" +
        '<div class="prose" style="font-size:.9rem"><p style="margin-bottom:.4rem"><strong>Why visit:</strong> ' + esc(d.whyVisit) + "</p>" +
        '<p style="margin-bottom:.8rem"><strong>Best for:</strong> ' + esc(d.bestFor) + "</p></div>" +
        '<a class="card__link" href="' + waLink("Hello Ganache Safaris, I would like to include " + d.name + " in my Tanzania trip.") +
        '" target="_blank" rel="noopener">Enquire about ' + esc(d.name.split(" ")[0]) + " " + ICON.arrow + "</a>" +
        "</div></article>";
    }).join("");
  }

  function renderExploreMosaic() {
    var m = $("#explore-mosaic"); if (!m) return;
    var ids = ["serengeti", "ngorongoro", "tarangire", "lake-manyara", "zanzibar"];
    var byId = {}; (D.destinations || []).forEach(function (d) { byId[d.id] = d; });
    m.innerHTML = ids.map(function (id) {
      var d = byId[id]; if (!d) return "";
      return '<a class="tile reveal" href="destinations.html#' + esc(id) + '">' +
        '<img src="' + esc(d.image) + '" alt="' + esc(d.name) + '" loading="lazy">' +
        '<div class="tile__body"><h3>' + esc(d.name) + "</h3><p>" + esc(d.whyVisit) + "</p></div></a>";
    }).join("");
  }

  function renderAccommodations() {
    var m = $("#accommodation-cards"); if (!m) return;
    m.innerHTML = (D.accommodations || []).map(function (a) {
      var feats = (a.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
      var msg = "Hello Ganache Safaris, I would like to know more about " + a.name + " for my Tanzania trip.";
      return '<article class="card reveal" id="' + esc(a.id) + '">' +
        '<div class="card__media"><img src="' + esc(a.image) + '" alt="' + esc(a.name) + ' in Tanzania" loading="lazy"></div>' +
        '<div class="card__body"><h3 class="card__title">' + esc(a.name) + "</h3>" +
        '<p class="card__text">' + esc(a.overview) + "</p>" +
        (feats ? '<ul class="tick-list" style="margin-bottom:1rem">' + feats + "</ul>" : "") +
        '<p class="card__text" style="font-size:.9rem"><strong>Best for:</strong> ' + esc(a.bestFor) + "</p>" +
        '<a class="card__link" href="' + waLink(msg) + '" target="_blank" rel="noopener">Enquire ' + ICON.arrow + "</a>" +
        "</div></article>";
    }).join("");
  }

  function renderWhy(mountId, onDark) {
    var m = document.getElementById(mountId); if (!m) return;
    var icons = [ICON.compass, ICON.route, ICON.leaf, ICON.heart];
    m.innerHTML = (D.whyGanache || []).map(function (w, i) {
      return '<div class="feature reveal"><div class="feature__icon">' + (icons[i] || ICON.compass) + "</div>" +
        "<div><h3>" + esc(w.title) + "</h3><p>" + esc(w.text) + "</p></div></div>";
    }).join("");
  }

  function renderTestimonials() {
    var m = $("#testimonials"); if (!m) return;
    var list = D.testimonials || [];
    if (!list.length) {
      m.innerHTML = '<div class="stories-empty reveal">' +
        '<p class="stories-empty__quote">Traveller stories coming soon.</p>' +
        '<p>We would rather show real words from real travellers than invent them. Genuine reviews from our guests will appear here.</p>' +
        '<p class="mt-2"><a class="card__link" style="justify-content:center" href="' + waLink("Hello Ganache Safaris, I travelled with you and would like to share a review.") + '" target="_blank" rel="noopener">Travelled with us? Share your story ' + ICON.arrow + '</a></p>' +
        "</div>";
      return;
    }
    m.innerHTML = '<div class="grid grid--3">' + list.map(function (t) {
      return '<figure class="quote-card reveal"><blockquote>' + esc(t.quote) + "</blockquote>" +
        "<figcaption>" + esc(t.name) + "<span>" + esc(t.trip) + "</span></figcaption></figure>";
    }).join("") + "</div>";
  }

  function renderFAQ() {
    var m = $("#faq-list"); if (!m) return;
    m.innerHTML = (D.faqs || []).map(function (group) {
      var items = group.items.map(function (it, i) {
        var pid = "faq-" + Math.abs(hashCode(group.category + it.q));
        return '<div class="acc-item"><h4 style="margin:0">' +
          '<button class="acc-trigger" aria-expanded="false" aria-controls="' + pid + '">' +
          "<span>" + esc(it.q) + '</span><span class="acc-icon" aria-hidden="true"></span></button></h4>' +
          '<div class="acc-panel" id="' + pid + '"><div class="acc-panel__inner"><p>' + esc(it.a) + "</p></div></div></div>";
      }).join("");
      return '<div class="faq-group reveal"><h3>' + esc(group.category) + '</h3><div class="accordion">' + items + "</div></div>";
    }).join("");
    initAccordion();
  }
  function hashCode(s) { var h = 0, i; for (i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; } return h; }

  /* ====================================================================== */
  /*  JOURNEY DETAIL PAGE (journey.html?id=...)                              */
  /* ====================================================================== */
  function renderJourneyDetail() {
    var m = $("#journey-detail"); if (!m) return;
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var j = (D.journeys || []).filter(function (x) { return x.id === id; })[0];
    if (!j) { j = (D.journeys || [])[0]; }
    if (!j) { m.innerHTML = "<p>Journey not found. <a href='safaris.html'>Back to all journeys.</a></p>"; return; }

    document.title = j.title + " — " + B.name;
    var titleSlot = $("#journey-hero-title"); if (titleSlot) titleSlot.textContent = j.title;
    var subSlot = $("#journey-hero-sub"); if (subSlot) subSlot.textContent = j.summary;
    var mediaSlot = $("#journey-hero-media img"); if (mediaSlot) { mediaSlot.src = j.image; mediaSlot.alt = j.title; }
    var crumbSlot = $("#journey-crumb"); if (crumbSlot) crumbSlot.textContent = j.title;

    var msg = "Hello Ganache Safaris, I am interested in the " + j.title + " tour. Could you help me plan it?";
    m.innerHTML =
      '<div class="detail-grid">' +
        '<div class="prose">' +
          '<span class="pill">' + esc(CAT_LABELS[j.category] || j.category) + "</span>" +
          "<h2 style='margin-top:1rem'>About this journey</h2>" +
          "<p>" + esc(j.summary) + "</p>" +
          "<h3>Itinerary highlights</h3><ul>" + j.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" +
          "<h3>Best suited for</h3><p>" + esc(j.bestFor) + "</p>" +
          "<h3>When to travel</h3><p>" + esc(j.season) + "</p>" +
          '<p class="form-note">Every tour is customisable — the exact route, lodges and length are shaped around your dates, interests and budget.</p>' +
        "</div>" +
        '<aside class="detail-aside">' +
          "<dl>" +
            "<dt>Where</dt><dd>" + esc(j.location) + "</dd>" +
            "<dt>Style</dt><dd>" + esc(j.style) + "</dd>" +
            "<dt>Season</dt><dd>" + esc(j.season) + "</dd>" +
          "</dl>" +
          '<a class="btn btn--primary btn--block" href="plan.html?journey=' + encodeURIComponent(j.title) + '">Plan this journey</a>' +
          '<a class="btn btn--whatsapp btn--block mt-1" href="' + waLink(msg) + '" target="_blank" rel="noopener">' + ICON.whatsapp + " Ask on WhatsApp</a>" +
          '<p class="form-note">No obligation. We usually reply within a day.</p>' +
        "</aside>" +
      "</div>";
  }

  /* ====================================================================== */
  /*  FILTERS (safaris page)                                                 */
  /* ====================================================================== */
  function initFilters() {
    var bar = $("#journey-filters"); var grid = $("#journey-cards"); if (!bar || !grid) return;
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn"); if (!btn) return;
      $all(".filter-btn", bar).forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var cat = btn.getAttribute("data-filter");
      $all(".card", grid).forEach(function (card) {
        var show = cat === "all" || card.getAttribute("data-category") === cat;
        card.style.display = show ? "" : "none";
      });
    });
  }

  /* ====================================================================== */
  /*  ACCORDION                                                              */
  /* ====================================================================== */
  function initAccordion() {
    $all(".acc-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        panel.style.maxHeight = open ? null : panel.scrollHeight + "px";
      });
    });
  }

  /* ====================================================================== */
  /*  PLAN FORM                                                              */
  /* ====================================================================== */
  function initPlanForm() {
    var form = $("#plan-form"); if (!form) return;

    // pre-select journey if arriving from a journey page
    var params = new URLSearchParams(window.location.search);
    var journey = params.get("journey");
    if (journey) {
      var msgField = $("#f-message", form);
      if (msgField && !msgField.value) msgField.value = "I'm interested in the " + journey + " journey. ";
    }

    function collect() {
      var fd = new FormData(form);
      var experiences = fd.getAll("experiences").join(", ");
      return {
        name: (fd.get("name") || "").trim(),
        email: (fd.get("email") || "").trim(),
        phone: (fd.get("phone") || "").trim(),
        country: (fd.get("country") || "").trim(),
        month: fd.get("month") || "",
        dates: fd.get("dates") || "",
        adults: fd.get("adults") || "",
        children: fd.get("children") || "",
        childAges: fd.get("childAges") || "",
        experiences: experiences,
        style: fd.get("style") || "",
        duration: fd.get("duration") || "",
        message: (fd.get("message") || "").trim()
      };
    }

    function buildMessage(d) {
      var L = ["Hello Ganache Safaris, I would like to start planning a Tanzania trip."];
      if (d.name) L.push("Name: " + d.name);
      if (d.country) L.push("From: " + d.country);
      if (d.month) L.push("Travel month: " + d.month);
      if (d.dates) L.push("Approx dates: " + d.dates);
      var people = [];
      if (d.adults) people.push(d.adults + " adult(s)");
      if (d.children && d.children !== "0") people.push(d.children + " child(ren)" + (d.childAges ? " (ages " + d.childAges + ")" : ""));
      if (people.length) L.push("Travellers: " + people.join(", "));
      if (d.experiences) L.push("Interested in: " + d.experiences);
      if (d.style) L.push("Trip style: " + d.style);
      if (d.duration) L.push("Duration: " + d.duration);
      if (d.message) L.push("Notes: " + d.message);
      return L.join("\n");
    }

    // WhatsApp button — live-updates the link as they type
    var waBtn = $("#plan-wa");
    function refreshWA() { if (waBtn) waBtn.setAttribute("href", waLink(buildMessage(collect()))); }
    form.addEventListener("input", refreshWA);
    form.addEventListener("change", refreshWA);
    refreshWA();

    // Submit: try email service if configured, else fall back to mailto + show success
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = collect();
      var body = buildMessage(d).replace(/^Hello Ganache Safaris, /, "");
      var FORM_ENDPOINT = form.getAttribute("data-endpoint") || ""; // set in plan.html when ready

      function showSuccess() {
        var ok = $("#form-success");
        if (ok) { ok.classList.add("show"); ok.setAttribute("tabindex", "-1"); ok.focus(); ok.scrollIntoView({ behavior: "smooth", block: "center" }); }
      }

      if (FORM_ENDPOINT) {
        var payload = new FormData(form);
        payload.append("_compiled", buildMessage(d));
        fetch(FORM_ENDPOINT, { method: "POST", body: payload, headers: { Accept: "application/json" } })
          .then(function (r) { if (r.ok) { form.reset(); showSuccess(); refreshWA(); } else { fallbackMail(); } })
          .catch(fallbackMail);
      } else {
        fallbackMail();
      }

      function fallbackMail() {
        var subject = "Tanzania trip enquiry" + (d.name ? " — " + d.name : "");
        var mailto = "mailto:" + B.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        showSuccess();
        window.location.href = mailto;
      }
    });
  }

  /* ====================================================================== */
  /*  REVEAL ON SCROLL                                                       */
  /* ====================================================================== */
  function initReveal() {
    var items = $all(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (i) { i.classList.add("in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ====================================================================== */
  /*  INIT                                                                   */
  /* ====================================================================== */
  function init() {
    buildHeader();
    buildFooter();
    buildFloatWA();
    injectBiz();
    renderExperiences();
    renderJourneys("home-journeys", 6);
    renderJourneys("journey-cards");
    renderDestinations();
    renderAccommodations();
    renderExploreMosaic();
    renderWhy("why-list");
    renderTestimonials();
    renderFAQ();
    renderJourneyDetail();
    initFilters();
    initAccordion();
    initPlanForm();
    // reveal needs to run after dynamic content is in the DOM
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
