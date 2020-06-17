import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

export default function Counter({ handleClick, count }) {
  return (
    <div>
      <p>
        <Button onClick={() => handleClick(1)}>
          Click me! (
          {count}
          )
        </Button>
      </p>
      <p>
        <Buttons handleClick={handleClick} />
      </p>
    </div>
  );
}
