import React from 'react';

import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
   {options.map(option => (
        <span key={nanoid()}>
          <button
            type="button"
            onClick={evt => onLeaveFeedback(evt.target.value)}
            value={option}
          >
            {option}
          </button>
        </span>
      ))}
  </div>
);

export default FeedbackOptions;
