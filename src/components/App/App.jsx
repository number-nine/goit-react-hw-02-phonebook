import { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleReviewCounter = e => {
    e.preventDefault();
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <h1> HW2-1 </h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            {...this.state}
            onLeaveFeedback={this.handleReviewCounter}
          />
        </Section>
        <Section title="Statistics">
          <Statistics {...this.state} />
        </Section>
      </Container>
    );
  }
}

export default App;
