import React from 'react';

import Counter from './Counter';

export default function Page({ count, handleClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        handleClick={handleClick}
      />
    </div>
  );
}
