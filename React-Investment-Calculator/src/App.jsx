import Header from './components/Header/Header'
import Result from './components/Results/Result';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput'
import './index.css'


function App(){
  const [userInput,setUserInput]=useState({
    initialInvestment:1000,
    annualInvestment:200,
    expectedReturn:4,
    duration:10
  });

  const inputIsValid= userInput.duration>=1 && userInput.initialInvestment>=1;

  function handleChange(inputIdentifier,newValue){
    setUserInput(prevValue=>{
      return {
          ...prevValue,
          [inputIdentifier]:+newValue,
      };
    });
  }
  return (
    <>
     <Header/>
     <UserInput userInput={userInput} onChange={handleChange}/>
     {inputIsValid && <Result input={userInput}/>}
     {!inputIsValid && <p className='center'>Please Enter Valid data</p>}
    </>   
  )
}

export default App
