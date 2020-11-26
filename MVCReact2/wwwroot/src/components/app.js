import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count +2 )}>{count}</button>
    </div>
  );
}