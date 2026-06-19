// Light / dark theme, shared across pages.
//  - Init runs immediately so there is no flash of the wrong theme.
//  - The toggle button is injected into the header on pages that do not
//    already ship one (the homepage ships its own markup).
//  - Clicks are delegated.
//  - A small one-time hint points the button out, then never shows again.
(function () {
  if (localStorage.getItem('bb-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function bbDismissHint() {
  var h = document.querySelector('.theme-hint');
  if (h) {
    h.classList.remove('show');
    setTimeout(function () { if (h.parentNode) h.parentNode.removeChild(h); }, 320);
  }
  try { localStorage.setItem('bb-theme-hint', '1'); } catch (e) {}
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('.theme-toggle');
  if (!b) return;
  var d = document.documentElement;
  if (d.getAttribute('data-theme') === 'light') {
    d.removeAttribute('data-theme');
    localStorage.setItem('bb-theme', 'dark');
  } else {
    d.setAttribute('data-theme', 'light');
    localStorage.setItem('bb-theme', 'light');
  }
  bbDismissHint();
});

function bbPositionHint(hint, btn) {
  var r = btn.getBoundingClientRect();
  hint.style.top = (r.bottom + 10) + 'px';
  hint.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-nav');
  var btn = document.querySelector('.theme-toggle');
  if (!btn && nav && nav.parentNode) {
    btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Switch light or dark theme');
    btn.setAttribute('title', 'Light / dark');
    btn.innerHTML = '<svg class="i-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg><svg class="i-moon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>';
    nav.parentNode.insertBefore(btn, nav.nextSibling);
  }
  if (!btn) return;

  // One-time hint so first-time visitors notice the button.
  var seen = '1';
  try { seen = localStorage.getItem('bb-theme-hint'); } catch (e) {}
  if (seen) return;

  var hint = document.createElement('div');
  hint.className = 'theme-hint';
  hint.setAttribute('role', 'status');
  hint.innerHTML = '<span>Light or dark, your call.</span>';
  document.body.appendChild(hint);
  bbPositionHint(hint, btn);
  window.addEventListener('resize', function () { bbPositionHint(hint, btn); });

  setTimeout(function () { hint.classList.add('show'); }, 900);
  var auto = setTimeout(bbDismissHint, 6500);
  hint.addEventListener('click', function () { clearTimeout(auto); bbDismissHint(); });
  window.addEventListener('scroll', function () { clearTimeout(auto); bbDismissHint(); }, { once: true, passive: true });
});
