import { nanoid } from 'nanoid';

import React from 'react';

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
