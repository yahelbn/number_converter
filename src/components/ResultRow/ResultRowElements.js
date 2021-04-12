import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  background-color: white;
  padding: 10px 10px;
  border: 1px grey solid;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  -moz-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  -webkit-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  margin: 10px;
  transition: 0.8s;

  &:hover {
    background-color: lightgray;
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  margin-right: 20px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  //margin: 20px 25px;
  margin: ${({ margin }) => (margin ? "20px 25px" : "13px 13px")};

  @media screen and (max-width: 480px) {
    font-size: 12px;
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
  border: 0.4px black solid;
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
