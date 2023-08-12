import { createRoot } from 'react-dom/client';
import { Sample } from './Sample';
import React from 'react';

try {
  // TODO: Figure out a way to include styles only scoped to the content of the shadow root
  const host = document.createElement('div');
  host.id = '__root';
  const shadowRoot = host.attachShadow({ mode: 'open' });
  document.body.appendChild(host);

  createRoot(shadowRoot).render(
    <React.StrictMode>
      <Sample />
    </React.StrictMode>
  );

  console.log('Poly Starter content script loaded');
} catch (e) {
  console.error(e);
}
