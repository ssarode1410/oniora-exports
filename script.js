document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Background dot grid for the hero map ---------- */
  var dotsGroup = document.getElementById('world-dots');
  if (dotsGroup) {
    var frag = document.createDocumentFragment();
    for (var y = 30; y < 620; y += 34) {
      for (var x = 20; x < 1190; x += 34) {
        // sparse, semi-random placement to suggest coastlines/landmasses rather than a full grid
        if (Math.random() > 0.62) {
          var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          c.setAttribute('cx', x + (Math.random() * 10 - 5));
          c.setAttribute('cy', y + (Math.random() * 10 - 5));
          c.setAttribute('r', 1.4);
          frag.appendChild(c);
        }
      }
    }
    dotsGroup.appendChild(frag);
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Animated stat counters ---------- */
  var stats = document.querySelectorAll('.stat-num');
  function animateStat(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = target * eased;
      el.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (stats.length) {
    if ('IntersectionObserver' in window) {
      var statObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateStat(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      stats.forEach(function (el) { statObserver.observe(el); });
    } else {
      stats.forEach(animateStat);
    }
  }

  /* ---------- Quote form (front-end only demo) ---------- */
  var form = document.getElementById('quote-form');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        note.textContent = 'Please fill in your name, company, and email before sending.';
        note.style.color = '#B33A3A';
        return;
      }
      var name = document.getElementById('name').value.trim();
      note.style.color = '';
      note.textContent = 'Thanks, ' + name.split(' ')[0] + ' — your request is logged. This form needs a backend or form service (e.g. Formspree, a mail API) connected before it can send for real.';
      form.reset();
    });
  }

  /* ---------- Header background solidifies after scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) header.style.boxShadow = '0 8px 24px rgba(0,0,0,.25)';
      else header.style.boxShadow = 'none';
    }, { passive: true });
  }
});
