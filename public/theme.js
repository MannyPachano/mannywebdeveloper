/*
 * Sets the theme on <html> before the first paint, so the page never flashes
 * the wrong one. This is a real file rather than an inline <script> because the
 * CSP in netlify.toml allows script-src 'self' only.
 *
 * Order of preference: what the visitor chose here before, otherwise their
 * operating system setting. Header.astro writes the choice; this reads it.
 */
(function () {
  var KEY = 'theme';
  var root = document.documentElement;

  function osTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {
    /* Private mode or blocked storage: fall through to the OS setting. */
  }

  var theme = saved === 'light' || saved === 'dark' ? saved : osTheme();
  root.setAttribute('data-theme', theme);

  /* Tints the browser chrome on mobile to match. */
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#1a1917' : '#ffe83d');

  /* Follow the OS while the visitor has not made a choice of their own. */
  if (!saved && window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () {
      var stillUnset = null;
      try {
        stillUnset = localStorage.getItem(KEY);
      } catch (e) {}
      if (stillUnset) return;
      var next = osTheme();
      root.setAttribute('data-theme', next);
      if (meta) meta.setAttribute('content', next === 'dark' ? '#1a1917' : '#ffe83d');
      root.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
})();
