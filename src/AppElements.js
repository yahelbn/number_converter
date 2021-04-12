import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "slategray" : "honeydew"};
  min-height: 1000px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
`;

export const NumberInput = styled.input`
  padding: 6px;
  padding-right: 20px;
  margin-bottom: 15px;
  border: none;
  border-radius: 4px;
  border: 1.7px solid lightgray;

  &:hover {
    border: 1.7px solid lightskyblue;
  }
  ::-webkit-input-placeholder {
    color: lightgray;
    font-size: 0.8rem;
  }
`;

export const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  padding: 10px 10px;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: ${({ isDarkMode }) =>
    isDarkMode ? "none" : "0.3px solid lightgray"};
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: tan;
    box-shadow: 0px 15px 20px #d2b48c;
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: row;
  margin: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const HeaderH1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 35px;
  text-shadow: 1px 1px 2px #000000;
  letter-spacing: 0.2rem;

  color: ${({ isDarkMode }) => (isDarkMode ? "honeydew" : "lightsteelblue")};

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Label = styled.label`
  margin-right: 20px;
  font-weight: bold;
  //margin: 20px 25px;
  text-align: center;
  font-size: 15px;

  margin: ${({ margin }) => (margin ? "20px 25px" : "13px 13px")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const MessageText = styled.div`
  margin-top: 20px;
  font-size: 10px;
  color: ${({ error }) => (error ? "salmon" : "green")};
  border: ${({ error }) => (error ? "1px solid salmon" : "1px solid green")};

  background-color: mintcream;
  padding: 10px 10px;
  border-radius: 20px;
`;
