// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import useEventListener from './useEventListener';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useInactiveTab() {
  useEventListener('visibilitychange', (evt) => {
    if (evt.target.visibilityState === 'hidden') {
      document.title = `🍺 ${document.title}`;
    }

    if (evt.target.visibilityState === 'visible') {
      document.title = document.title.substr(2);
    }
  });
}
