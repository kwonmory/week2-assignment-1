import React from 'react';

import Counter from './Counter';

export default function Page({ count, handleClickMe, handleClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickMe={handleClickMe}
        onClickNumber={handleClickNumber}
      />
    </div>
  );
}
