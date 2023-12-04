import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'rgb(226, 8, 255)' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
