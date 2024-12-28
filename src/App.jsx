import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInputs.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInputs((prevInputs) => {
      return { ...prevInputs, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInputs={userInputs} />
      {inputIsValid ? (
        <Results userInput={userInputs} />
      ) : (
        <p className="center">Duration should be greater than 0!</p>
      )}
    </>
  );
}

export default App;
