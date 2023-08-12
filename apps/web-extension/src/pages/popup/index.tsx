import '@ps/tailwind/styles.css';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';

function init() {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Popup root element");
  const root = createRoot(rootContainer);
  root.render(<Popup />);
}

init();
