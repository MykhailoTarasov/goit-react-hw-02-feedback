import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Made one function for all three buttons
  handlerButtonTags = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total > 0 ? (good / total) * 100 : 0;

    return percentage.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const tags = Object.keys(this.state);


    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <div>
          <h2>Please leave feedback</h2>

          <FeedbackOptions options={tags}
            onLeaveFeedback={this.handlerButtonTags}/>
          
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}

export default App;
