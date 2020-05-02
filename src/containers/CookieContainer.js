// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Toast, Link, Button } from '~components';
import { useLocalStorage } from '~utils/';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CookieContainer() {
  const [isVisible, setIsVisible] = useLocalStorage('isShowCookies', true);

  if (!isVisible) return null;

  return (
    <Toast
      css={`
        background-color: var(--color-bg);
        color: var(--color-text);
        font-size: 1.25rem;
        bottom: auto;
        top: 0;

        @media screen and (min-width: 300px) {
          bottom: 0;
          top: auto;
        }
      `}
      isVisible
    >
      Yeah, chúng tôi xài cookies, chúng tôi còn có một {' '}
      <Link to="/legal/privacy/" look="secondary">
        cookie policy
      </Link>
      <Button
        look="secondary"
        css={`
          margin: 0 0 0 1rem;
        `}
        onClick={() => setIsVisible(!isVisible)}
      >
        Đồng ý{' '}
        <span role="img" aria-label="cookie">
          🍪
        </span>
      </Button>
    </Toast>
  );
}
