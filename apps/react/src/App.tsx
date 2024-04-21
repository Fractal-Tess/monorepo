import { useState } from 'react';
import { Button } from '$components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="h-screen w-screen">
        <section className="mx-auto container h-full gap-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-12">
            <a href="https://vitejs.dev" target="_blank">
              <img src={'/vite.svg'} className="h-24 w-24" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={'/react.svg'} className="h-24 w-24" alt="React logo" />
            </a>
          </div>

          <h1>Vite + React</h1>

          <Button onClick={() => setCount(count + 1)}> count is {count}</Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
