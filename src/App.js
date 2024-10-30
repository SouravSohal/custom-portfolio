// src/App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import Background from './background';
import Foreground from './foreground';

function App() {
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;

    const updateCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="App">
      <div className="custom-cursor" ref={cursorRef}></div> {/* Custom cursor */}
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
