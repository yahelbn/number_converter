import React, { useState, useEffect } from "react";
import { HeaderH2, Label, Column, Card } from "./ResultsRowsElements";
import ResultRow from "./../ResultRow/index";
const ResultsRows = ({ historyArr, handleRemove, isDarkMode }) => {
  /*In this component we run on the "historyArr" coming from the previous component and initialize each result row */
  return (
    <Column>
      {historyArr.length === 0 ? (
        <HeaderH2 isDarkMode={isDarkMode} margin={true}>
          Please enter some number
        </HeaderH2>
      ) : (
        <HeaderH2 isDarkMode={isDarkMode} margin={true}>
          History of user inputs and results :{" "}
        </HeaderH2>
      )}

      {historyArr.map((data, idx) => {
        return (
          <ResultRow
            key={idx}
            data={data}
            idx={idx}
            handleRemove={handleRemove}
          />
        );
      })}
    </Column>
  );
};

export default ResultsRows;
