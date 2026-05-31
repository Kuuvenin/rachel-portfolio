// Shared nav HTML — injected by each page
const NAV_HTML = `
<nav id="nav">
  <a href="../index.html" class="nav-logo">Rai <span class="star">✦</span> Kuu</a>
  <ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../pages/works.html">Works</a></li>
    <li><a href="../pages/playground.html">Playground</a></li>
  </ul>
</nav>`;

const NAV_HTML_ROOT = `
<nav id="nav">
  <a href="index.html" class="nav-logo">Rai <span class="star">✦</span> Kuu</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="pages/works.html">Works</a></li>
    <li><a href="pages/playground.html">Playground</a></li>
  </ul>
</nav>`;

const TICKER_ITEMS = [
  'Concept Design','Character Art','UI / UX','Branding',
  '3D & Blender','Print Design','Figma','Illustration'
];

function buildTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return `<div class="ticker"><div class="ticker-track" aria-hidden="true">${
    doubled.map(t => `<span class="t-item">${t}<span class="dot"> ✦</span></span>`).join('')
  }</div></div>`;
}

const FOOTER_HTML = (prefix='') => `
<footer class="site-footer">
  <div class="foot-grid">
    <div class="foot-cta fi">
      <div class="foot-cta-label">Interested to work with me?</div>
      <h3>Let's make<br>something strange.</h3>
      <a class="foot-email" href="mailto:Rachel2benari@gmail.com">Rachel2benari@gmail.com</a>
    </div>
    <div class="foot-mid fi d1">
      <span class="foot-logo">Rai ✦ Kuu</span>
      <div class="foot-clock" id="clock">--:--:--</div>
    </div>
    <div class="foot-links fi d2">
      <a href="https://www.instagram.com/kuuvenin/" target="_blank" rel="noopener">Instagram ↗</a>
      <a href="#" target="_blank" rel="noopener">Behance ↗</a>
      <a href="#" target="_blank" rel="noopener">Twitter ↗</a>
      <a href="#" target="_blank" rel="noopener">Dribbble ↗</a>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 Rachel Ben Ari</span>
    <span>Concept &amp; Character Design</span>
  </div>
</footer>`;
