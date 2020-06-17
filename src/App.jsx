import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(increaseNumber) {
    setCount(count + increaseNumber);
  }

  return (
    <Page
      count={count}
      handleClick={handleClick}
    />
  );
}
