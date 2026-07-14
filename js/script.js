// ============================================
// Naja Projects — shared script
// Handles: scroll-reveal animation, mobile nav toggle
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: no IntersectionObserver support
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Footer: inject Privacy link + Cookie settings button (kept in JS so
  // every page stays in sync without editing each footer by hand)
  var footerRow = document.querySelector('footer .footer-row');
  if (footerRow) {
    var extra = document.createElement('div');
    extra.className = 'footer-extra';
    extra.innerHTML =
      '<a href="/privacy/" class="mono" style="text-decoration:underline; text-underline-offset:3px;">Privacy</a>' +
      '<button type="button" class="footer-link-btn" id="cookie-settings-btn">Cookie settings</button>';
    footerRow.appendChild(extra);
    document.getElementById('cookie-settings-btn').addEventListener('click', function () {
      localStorage.removeItem('naja_cookie_consent');
      showCookieBanner();
    });
  }

  initCookieConsent();
});

// ============================================
// Cookie consent
// ============================================
var COOKIE_KEY = 'naja_cookie_consent';

function initCookieConsent() {
  var consent = localStorage.getItem(COOKIE_KEY);
  if (consent === 'accepted') {
    loadAnalytics();
    return;
  }
  if (consent === 'declined') {
    return;
  }
  // No choice made yet — show the banner after a short delay
  window.setTimeout(showCookieBanner, 600);
}

function showCookieBanner() {
  if (document.querySelector('.cookie-banner')) return;

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML =
    '<h4>Cookies</h4>' +
    '<p>We use analytics cookies to understand how visitors use this site. ' +
    '<a href="/privacy/">Learn more</a></p>' +
    '<div class="cookie-actions">' +
    '<button type="button" class="cookie-btn decline">Decline</button>' +
    '<button type="button" class="cookie-btn accept">Accept</button>' +
    '</div>';
  document.body.appendChild(banner);

  requestAnimationFrame(function () { banner.classList.add('show'); });

  banner.querySelector('.accept').addEventListener('click', function () {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    dismissBanner(banner);
    loadAnalytics();
  });
  banner.querySelector('.decline').addEventListener('click', function () {
    localStorage.setItem(COOKIE_KEY, 'declined');
    dismissBanner(banner);
  });
}

function dismissBanner(banner) {
  banner.classList.remove('show');
  window.setTimeout(function () { banner.remove(); }, 300);
}

// Only fires once the visitor has accepted, and only once a real
// Measurement ID is set below (replace G-XXXXXXX with yours).
function loadAnalytics() {
  var GA_MEASUREMENT_ID = 'G-XXXXXXX';
  if (GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) return; // not configured yet

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
  window.gtag = gtag;
}
