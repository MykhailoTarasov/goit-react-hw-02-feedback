import React, { Component } from 'react';

import Feedback from '../components/feedback/feedback';

class App extends Component {
  render() {
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
        <Feedback />
      </div>
    );
  }
}

export default App;
