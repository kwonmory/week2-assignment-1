import React from 'react';

import Button from './Button';

export default function Buttons({ handleClick }) {
  return (
    [1, 2, 3, 4, 5].map((number) => (
      <Button key={number} onClick={() => handleClick(number)}>{number}</Button>
    ))
  );
}
