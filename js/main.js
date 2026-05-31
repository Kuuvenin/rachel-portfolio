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
