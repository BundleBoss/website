// Light / dark theme, shared across pages.
//  - Init runs immediately so there is no flash of the wrong theme.
//  - The animated sun/moon button is injected on pages that do not ship one.
//  - A small label names the mode as you toggle, and points the button out on
//    a first visit.
(function () {
  if (localStorage.getItem('bb-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

var BB_TOGGLE_SVG = '<svg class="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">'
  + '<mask class="moon" id="theme-moon-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"/>'
  + '<circle cx="24" cy="10" r="6" fill="black"/></mask>'
  + '<circle class="sun" cx="12" cy="12" r="6" mask="url(#theme-moon-mask)" fill="currentColor"/>'
  + '<g class="sun-beams" stroke="currentColor">'
  + '<line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>'
  + '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>'
  + '<line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>'
  + '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
  + '</g></svg>';

function bbPositionTip(el, btn) {
  var r = btn.getBoundingClientRect();
  el.style.top = (r.bottom + 10) + 'px';
  el.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
}

function bbShowTip(text, dur) {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var tip = document.querySelector('.theme-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'theme-tip';
    tip.setAttribute('aria-hidden', 'true');
    document.body.appendChild(tip);
  }
  tip.textContent = text;
  bbPositionTip(tip, btn);
  tip.classList.remove('show');
  void tip.offsetWidth;            // restart the reveal transition
  tip.classList.add('show');
  clearTimeout(tip._t);
  tip._t = setTimeout(function () { tip.classList.remove('show'); }, dur);
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('.theme-toggle');
  if (!b) return;
  var d = document.documentElement;
  var toLight = d.getAttribute('data-theme') !== 'light';
  // Ease the page colours across the switch (skipped for reduced-motion).
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    d.classList.add('theme-anim');
    clearTimeout(window.__bbAnimT);
    window.__bbAnimT = setTimeout(function () { d.classList.remove('theme-anim'); }, 520);
  }
  if (toLight) { d.setAttribute('data-theme', 'light'); localStorage.setItem('bb-theme', 'light'); }
  else { d.removeAttribute('data-theme'); localStorage.setItem('bb-theme', 'dark'); }
  try { localStorage.setItem('bb-theme-hint', '1'); } catch (e2) {}
  bbShowTip(toLight ? 'Light mode' : 'Dark mode', 1300);
});

window.addEventListener('resize', function () {
  var tip = document.querySelector('.theme-tip');
  var btn = document.querySelector('.theme-toggle');
  if (tip && btn) bbPositionTip(tip, btn);
});

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-nav');
  var btn = document.querySelector('.theme-toggle');
  if (!btn && nav && nav.parentNode) {
    btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Switch light or dark theme');
    btn.setAttribute('title', 'Light / dark');
    btn.innerHTML = BB_TOGGLE_SVG;
    nav.parentNode.insertBefore(btn, nav.nextSibling);
  }
  if (!btn) return;

  // First-visit nudge so people notice the button, shown once.
  var seen = '1';
  try { seen = localStorage.getItem('bb-theme-hint'); } catch (e) {}
  if (seen) return;
  setTimeout(function () {
    bbShowTip('Light or dark, your call.', 6000);
    try { localStorage.setItem('bb-theme-hint', '1'); } catch (e) {}
    window.addEventListener('scroll', function () {
      var tip = document.querySelector('.theme-tip');
      if (tip) tip.classList.remove('show');
    }, { once: true, passive: true });
  }, 900);
});
