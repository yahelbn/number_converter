import React, { useState, useEffect } from "react";
import { Label, Card, StyledButton } from "./ResultRowElements";
import UseAnimations from "react-useanimations";

import trash2 from "react-useanimations/lib/trash2";

const ResultRow = ({ data, handleRemove, idx }) => {
  /*In this component we create each result row */
  return (
    <Card key={idx}>
      <Label>The input number: {data.number},</Label>
      <Label>in words: {data.numberConvert},</Label>
      <Label> Submit in: {data.timestamp}</Label>

      <StyledButton type="button" onClick={() => handleRemove(idx)}>
        <UseAnimations animation={trash2} size={30} />
      </StyledButton>
    </Card>
  );
};

export default ResultRow;
