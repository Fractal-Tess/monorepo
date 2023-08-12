import { createRoot } from 'react-dom/client';
import Newtab from './Newtab';
import '@ps/tailwind/styles.css';

function init() {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Newtab root element");
  const root = createRoot(rootContainer);
  root.render(<Newtab />);
}

init();
