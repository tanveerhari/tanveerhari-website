// tanveerhari.com: small, progressive enhancements. The site works without this file.
(function () {
  // Logo: on touch screens a tap shows the Gurmukhi name briefly instead of hover.
  var brand = document.querySelector('.brand');
  if (brand) {
    brand.addEventListener('touchstart', function (e) {
      if (!brand.classList.contains('show-alt')) {
        e.preventDefault();
        brand.classList.add('show-alt');
        setTimeout(function () { brand.classList.remove('show-alt'); }, 1800);
      }
    }, { passive: false });
  }

  // Writing index: filter essays by thread.
  var chips = document.querySelectorAll('.chip[data-thread]');
  if (chips.length) {
    var groups = document.querySelectorAll('.group[data-thread]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var on = chip.getAttribute('aria-pressed') !== 'true';
        chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        if (on) chip.setAttribute('aria-pressed', 'true');
        var t = on ? chip.dataset.thread : null;
        groups.forEach(function (g) { g.hidden = !!t && g.dataset.thread !== t; });
      });
    });
  }

  // Projects and Writing: filter tabs, with #architecture / #essays / #professional etc. preselecting one.
  var tabs = document.querySelectorAll('.tab[data-filter]');
  if (tabs.length) {
    var entries = document.querySelectorAll('[data-filterable] > [data-cat]');
    var apply = function (f) {
      tabs.forEach(function (t) { t.setAttribute('aria-pressed', t.dataset.filter === f ? 'true' : 'false'); });
      entries.forEach(function (e) { e.hidden = f !== 'all' && e.dataset.cat !== f; });
    };
    tabs.forEach(function (t) { t.addEventListener('click', function () { apply(t.dataset.filter); }); });
    var h = (location.hash || '').slice(1);
    if (h && document.querySelector('.tab[data-filter="' + h + '"]')) apply(h);
  }

  // Work with me: copy the email address.
  document.querySelectorAll('.copy[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy, label = btn.textContent;
      var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = label; }, 1600); };
      var select = function () {
        var el = document.querySelector('.email');
        if (!el) return;
        var r = document.createRange(); r.selectNodeContents(el);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        btn.textContent = 'Selected, press copy';
      };
      try {
        navigator.clipboard.writeText(text).then(done, select);
      } catch (e) { select(); }
    });
  });
})();
