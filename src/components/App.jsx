import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
          <div>
            <button type="button" onClick={this.handleIncrementGood}>
              Good
            </button>
            <button type="button" onClick={this.handleIncrementNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleIncrementBad}>
              Bad
            </button>
          </div>
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
