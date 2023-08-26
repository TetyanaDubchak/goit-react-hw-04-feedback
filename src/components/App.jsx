
import { Component } from "react";
import { Section } from "./Section/Section";
import { GlobalStyled } from "./GlobalStyle";
import 'modern-normalize'
import { Wrapper } from "./App.styled";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let sum = this.state.good + this.state.neutral + this.state.bad
    return sum
      
  }

  countPositiveFeedbackPercentage = () => {
    let part = ((this.state.good) * 100) / (this.state.good + this.state.neutral + this.state.bad)
    return Math.round(part)
  }

  handleClick = type => {
    this.setState(prevState => {
      return {
          [type]: prevState[type] + 1,
        }
      })
  }


  render() {
    return (
      <Wrapper>
      <Section  part={this.countPositiveFeedbackPercentage()} sum={this.countTotalFeedback()} clicksGood = {this.state.good} clicksNeutral = {this.state.neutral} clicksBad = {this.state.bad} onButtons = {this.handleClick} title={'Please leave feedback'} />
      <GlobalStyled/>
      </Wrapper>
      
    )
  }
}
