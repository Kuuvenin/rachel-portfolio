// ── Nav scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Live clock (Israel time)
function tick() {
  const el = document.getElementById('clock');
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString('he-IL', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  }) + ' IL';
}
tick();
setInterval(tick, 1000);

// ── Fade-in on scroll
(function () {
  const els = document.querySelectorAll('.fi');
  if (!els.length) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('v'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    // Hero elements animate immediately
    document.querySelectorAll('.hero-instant').forEach(el => {
      requestAnimationFrame(() => el.classList.add('v'));
    });
  } else {
    els.forEach(el => el.classList.add('v'));
  }
})();

// ── Spooky dancing text — splits letters into spans with staggered delays
(function () {
  document.querySelectorAll('.spooky-text').forEach(el => {
    let i = 0;
    function wrap(node) {
      if (node.nodeType === 3) {
        const frag = document.createDocumentFragment();
        for (const ch of node.textContent) {
          if (ch.trim() === '') { frag.appendChild(document.createTextNode(ch)); }
          else {
            const s = document.createElement('span');
            s.textContent = ch;
            s.style.animationDelay = ((i++ * 0.11) % 2.4).toFixed(2) + 's';
            frag.appendChild(s);
          }
        }
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        Array.from(node.childNodes).forEach(wrap);
      }
    }
    Array.from(el.childNodes).forEach(wrap);
  });
})();

// ── About photo slideshow (4 seconds per photo, 0.6s crossfade)
(function () {
  const slides = document.querySelectorAll('.about-slideshow .slide');
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
})();

// ── Mark active nav link
(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path || (path === '/' && href === 'index.html') || (path.endsWith(href) && href !== '/')) {
      a.classList.add('active');
    }
  });
})();
