import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#ffffff'); // Default color

  const executeScript = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        args: [color],
        func: (color) => {
          document.body.style.backgroundColor = color;
        },
      },
      () => {
        // Callback function if needed
      }
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.currentTarget.value)}
        />
        <button onClick={executeScript}>Click me</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
