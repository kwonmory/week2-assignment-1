import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickMe() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      handleClickMe={handleClickMe}
      handleClickNumber={handleClickNumber}
    />
  );
}
