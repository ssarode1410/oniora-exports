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

  /* ---------- Product varieties modal ---------- */
  var PRODUCT_CATALOG = {
    onions: {
      eyebrow: 'EXPORT VARIETIES — ONIONS',
      title: 'Fresh Indian Onions',
      subtitle: 'Cured, size-graded, and packed to destination-country phytosanitary standards.',
      varieties: [
        {
          name: 'Sambhaji Nagar / Nashik Red Onion',
          description: 'Our signature export variety — firm skin, strong shelf life, and consistent pungency for long sea transit.',
          grade: '40–70mm, 70mm+ (Jumbo)',
          packing: '25kg / 50kg mesh or jute bags'
        },
        {
          name: 'Pune Pink Onion',
          description: 'Milder flavor with a lighter pink skin tone, preferred by buyers seeking a less pungent table variety.',
          grade: '45–70mm',
          packing: '25kg mesh bags'
        },
        {
          name: 'White Onion',
          description: 'Clean, crisp, and sweeter profile — widely demanded for pickling, food service, and dehydration.',
          grade: '40–65mm',
          packing: '25kg mesh bags'
        },
        {
          name: 'Bangalore Rose Onion',
          description: 'Small, deep-red, and distinctively sweet — a specialty grade for niche retail and Southeast Asian markets.',
          grade: '15–30mm',
          packing: '10kg / 25kg mesh bags'
        }
      ]
    },
    grapes: {
      eyebrow: 'EXPORT VARIETIES — GRAPES',
      title: 'Fresh Indian Grapes',
      subtitle: 'APEDA-registered vineyard sourcing with pre-cooling and MRL compliance for global markets.',
      varieties: [
        {
          name: 'Thompson Seedless (Green)',
          description: 'Crisp, sweet, oval green berries with high Brix levels — India\'s most widely exported table grape.',
          grade: '16mm+ / 18mm+ berry size',
          packing: '4.5kg / 5kg punnets or loose cartons'
        },
        {
          name: 'Sonaka / Super Sonaka Seedless',
          description: 'Elongated, golden-green seedless berries prized for crunch and extended cold-chain shelf life.',
          grade: '16mm+ berry diameter',
          packing: '4.5kg / 5kg corrugated cartons'
        },
        {
          name: 'Sharad Seedless (Black)',
          description: 'Rich, deep-black seedless berries with balanced sweetness and firm skin for retail display.',
          grade: '16mm+ / 18mm+ berry size',
          packing: '4.5kg / 5kg punnet cartons'
        },
        {
          name: 'Flame Seedless (Red)',
          description: 'Vibrant red seedless clusters with a crisp bite and mild tart-sweet finish.',
          grade: '16mm+ berry size',
          packing: '4.5kg / 5kg ventilated cartons'
        }
      ]
    },
    pomegranates: {
      eyebrow: 'EXPORT VARIETIES — POMEGRANATES',
      title: 'Fresh Indian Pomegranates',
      subtitle: 'Hand-sorted for glossy skin, soft seeds, and high juice content across Gulf and European routes.',
      varieties: [
        {
          name: 'Bhagwa',
          description: 'India\'s premier export cultivar — glossy saffron-red rind, deep-red soft arils, and long shelf life.',
          grade: '250g–350g+ per fruit',
          packing: '3kg / 3.5kg / 5kg ventilated cartons'
        },
        {
          name: 'Super Bhagwa',
          description: 'Uniform, heavier fruit with bright crimson color and superior visual appeal for supermarket chains.',
          grade: '300g–400g+ per fruit',
          packing: '3.5kg / 5kg export cartons'
        },
        {
          name: 'Ganesh',
          description: 'Soft-seeded, pinkish-red arils with a pleasantly sweet flavor profile popular in regional markets.',
          grade: '220g–320g per fruit',
          packing: '3.5kg / 5kg corrugated cartons'
        },
        {
          name: 'Arakta',
          description: 'Deep-red arils with high juice yield and rich sweetness, suited for both fresh retail and juicing.',
          grade: '200g–300g per fruit',
          packing: '3kg / 5kg ventilated cartons'
        }
      ]
    },
    chillies: {
      eyebrow: 'EXPORT VARIETIES — GREEN CHILLIES',
      title: 'Fresh Green Chillies',
      subtitle: 'Harvested fresh with intact stems, graded for uniform length, color, and pungency.',
      varieties: [
        {
          name: 'G4 Green Chilli',
          description: 'The benchmark export variety — dark green, glossy pods with balanced heat and strong transit resilience.',
          grade: '7–10cm pod length',
          packing: '3.5kg / 5kg ventilated corrugated boxes'
        },
        {
          name: 'Teja (S17)',
          description: 'High-pungency, slender dark-green chillies sought after by spice processors and Gulf wholesale buyers.',
          grade: '6–9cm pod length',
          packing: '3.5kg / 5kg ventilated boxes'
        },
        {
          name: 'Jwala',
          description: 'Light-to-medium green pods with sharp, aromatic heat — a staple for South Asian and UK markets.',
          grade: '8–12cm pod length',
          packing: '3.5kg / 5kg ventilated boxes'
        },
        {
          name: 'Byadgi',
          description: 'Milder heat with rich aroma and distinctive wrinkled skin, favored for culinary and specialty buyers.',
          grade: '8–12cm pod length',
          packing: '3.5kg / 5kg corrugated cartons'
        }
      ]
    }
  };

  var modal = document.getElementById('product-modal');
  var modalEyebrow = document.getElementById('modal-eyebrow');
  var modalTitle = document.getElementById('modal-title');
  var modalSub = document.getElementById('modal-sub');
  var modalVarieties = document.getElementById('modal-varieties');
  var modalClose = document.getElementById('modal-close');
  var productCards = document.querySelectorAll('.product-card[data-product]');

  function closeProductModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openProductModal(productKey) {
    var data = PRODUCT_CATALOG[productKey];
    if (!modal || !data) return;

    modalEyebrow.textContent = data.eyebrow;
    modalTitle.textContent = data.title;
    modalSub.textContent = data.subtitle;
    modalVarieties.innerHTML = '';

    data.varieties.forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'variety-card';

      var top = document.createElement('div');
      var h4 = document.createElement('h4');
      h4.textContent = item.name;
      var desc = document.createElement('p');
      desc.textContent = item.description;
      top.appendChild(h4);
      top.appendChild(desc);

      var specs = document.createElement('div');
      specs.className = 'variety-specs';
      var gradeLine = document.createElement('span');
      gradeLine.textContent = 'Grade: ' + item.grade;
      var packLine = document.createElement('span');
      packLine.textContent = 'Packing: ' + item.packing;
      specs.appendChild(gradeLine);
      specs.appendChild(packLine);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'variety-quote-btn';
      btn.textContent = 'Request Quote for This';
      btn.addEventListener('click', function () {
        closeProductModal();
        var gradeInput = document.getElementById('destination');
        if (gradeInput) {
          gradeInput.value = item.name + ' (' + item.grade + ')';
        }
        var contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        var nameInput = document.getElementById('name');
        if (nameInput) {
          setTimeout(function () { nameInput.focus(); }, 450);
        }
      });

      card.appendChild(top);
      card.appendChild(specs);
      card.appendChild(btn);
      modalVarieties.appendChild(card);
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
  }

  productCards.forEach(function (card) {
    var key = card.getAttribute('data-product');
    card.addEventListener('click', function () {
      openProductModal(key);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductModal(key);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProductModal);
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeProductModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeProductModal();
    }
  });

  /* -------- Quote form (Web3Forms) -------- */
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

      note.style.color = '';
      note.textContent = 'Sending your request...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            var name = document.getElementById('name').value.trim();
            note.textContent = 'Thanks, ' + name.split(' ')[0] + ' — your quote request has been sent. We will respond within one business day.';
            form.reset();
          } else {
            note.style.color = '#B33A3A';
            note.textContent = 'Something went wrong. Please email us directly at onioraexports@gmail.com.';
          }
        })
        .catch(function () {
          note.style.color = '#B33A3A';
          note.textContent = 'Network error. Please email us directly at onioraexports@gmail.com.';
        });
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
