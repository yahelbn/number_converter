import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const HeaderH2 = styled.h2`
  margin-bottom: 35px;
  color: lightsteelblue;
  text-shadow: 1px 1px 2px #000000;
  letter-spacing: 0.1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? "honeydew" : "lightsteelblue")};
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
