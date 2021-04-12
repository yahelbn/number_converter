import React, { useState, useEffect } from "react";
import "./App.css";
import {
  StyledButton,
  NumberInput,
  Row,
  HeaderH1,
  Label,
  Container,
  AppContainer,
  Form,
  MessageText,
} from "./AppElements";
import converter from "number-to-words";
import DarkModeToggle from "react-dark-mode-toggle";
import ResultsRows from "./components/ResultsRows/index";

/* Function inWords convert number to words - without package or api */
import { inWords } from "./utils";

const App = () => {
  /* initialization - states  */
  const [number, setNumber] = useState();
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  /* Inside this state we check for previous local storage data on "historyArr" item if exist use it.*/
  const [historyArr, setHistoryArr] = useState(
    localStorage.getItem("historyArr")
      ? JSON.parse(localStorage.getItem("historyArr"))
      : []
  );
  const [message, setMessage] = useState(undefined);
  const [error, setError] = useState(false);
  const [currentResult, setCurrentResult] = useState(undefined);

  function handlSubmit(e) {
    e.preventDefault();
    /* Check if input-number is a number */
    if (isNumeric(number)) {
      /* Adding the number to history */
      let numberConvert = converter.toWords(number);
      /* For using the function inWords from utils */
      //let numberConvert = inWords(number);
      const timestamp = new Date().toString();
      const values = [...historyArr];
      values.push({ number, numberConvert, timestamp });
      setCurrentResult({ number, numberConvert, timestamp });
      setHistoryArr(values);
      localStorage.setItem("historyArr", JSON.stringify(values));
      setError(false);
      setMessage("Your result added to history!");
    } else {
      setMessage("Try again , enter a negative or positive number please.");
      setError(true);
      setCurrentResult(undefined);
    }
  }

  /* Check if string is negative or positive number*/
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  /* Remove each row of result - by sending this function to child components*/
  const handleRemove = (idx) => {
    const values = [...historyArr];
    values.splice(idx, 1);
    setHistoryArr(values);
    localStorage.setItem("historyArr", JSON.stringify(values));
    setCurrentResult(undefined);
    setMessage(undefined);
  };

  return (
    <AppContainer isDarkMode={isDarkMode}>
      <Container>
        <HeaderH1 isDarkMode={isDarkMode}>Number Converter </HeaderH1>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
        <Form onSubmit={handlSubmit}>
          <Row>
            <Label isDarkMode={isDarkMode} margin={true}>
              Select a number:
            </Label>
            <NumberInput
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              required
              placeholder="write number..."
            ></NumberInput>
          </Row>
          {currentResult && (
            <Label isDarkMode={isDarkMode}>
              The number {currentResult.number} , in words:
              {currentResult.numberConvert}
            </Label>
          )}
          <StyledButton
            isDarkMode={isDarkMode}
            onClick={handlSubmit}
            onSubmit={handlSubmit}
          >
            Submit
          </StyledButton>

          {message && <MessageText error={error}>{message}</MessageText>}
        </Form>
        <ResultsRows
          isDarkMode={isDarkMode}
          historyArr={historyArr}
          handleRemove={handleRemove}
        />
      </Container>
    </AppContainer>
  );
};

export default App;
