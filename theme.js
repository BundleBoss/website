// Light / dark theme, shared across pages. Init runs immediately (no flash);
// the toggle button is injected into the header; clicks are delegated.
// The homepage carries its own inline copy, so this skips injecting a second
// button if one is already present.
(function () {
  if (localStorage.getItem('bb-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

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
});

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.theme-toggle')) return;
  var nav = document.querySelector('.site-nav');
  if (!nav || !nav.parentNode) return;
  var btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Switch light or dark theme');
  btn.setAttribute('title', 'Light / dark');
  btn.innerHTML = '<svg class="i-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg><svg class="i-moon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>';
  nav.parentNode.insertBefore(btn, nav.nextSibling);
});
