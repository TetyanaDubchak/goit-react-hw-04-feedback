
import { useState } from "react";
import { Section } from "./Section/Section";
import { GlobalStyled } from "./GlobalStyle";

import { Wrapper } from "./App.styled";
import 'modern-normalize'


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(prevState => prevState + 1)
  } 

  const onNeutralClick = () => {
    setNeutral(prevState => prevState + 1) 
  }

  const handleClickBad = () => {
    setBad(prevState => prevState + 1) 
  }

  const countTotalFeedback = () => {
    let sum = good + neutral + bad
    return sum
      
  }

  const countPositiveFeedbackPercentage = () => {
    let part = ((good) * 100) / (good + neutral + bad)
    return Math.round(part)
  }

  return (
      <Wrapper>
        <Section  part={countPositiveFeedbackPercentage()} sum={countTotalFeedback()} clicksGood = {good} clicksNeutral = {neutral} clicksBad = {bad} onGoodClick = {handleClickGood} onNeutralClick={onNeutralClick} onBadClick ={handleClickBad} title={'Please leave feedback'} />
        <GlobalStyled/>
      </Wrapper>
      
    )
}