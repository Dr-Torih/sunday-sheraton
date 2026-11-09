/* Sunday Sheraton — approved Student Project Kit file-availability gate.
   Do not expose a download link until a same-origin Office asset actually exists.
   Bilingual UI remains controlled by the course's existing data-ar/data-en system. */
(() => {
  'use strict';
  const section = document.getElementById('project-kit');
  if (!section) return;
  section.querySelectorAll('a[data-kit-asset]').forEach(async link => {
    const state = link.closest('.project-kit-card')?.querySelector('.project-kit-status');
    if (!state) return;
    try {
      const response = await fetch(link.href, { method: 'HEAD', cache: 'no-store' });
      const type = (response.headers.get('content-type') || '').toLowerCase();
      if (!response.ok || type.includes('text/html')) return;
      link.hidden = false;
      state.hidden = true;
    } catch (_) {
      // No network/offline or missing artifact: retain the truthful pending state.
    }
  });
})();
