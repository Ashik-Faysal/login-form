import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  max-width: 1520px;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex: none; 
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: none; 
  }
`;

export const Form = styled.form`
  width: 80%;
  max-width: 450px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  display: block;
  padding: 10px;
  font-size: 16px;
  width: 450px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
`;

export const PasswordInput = styled.input`
  // Your password input styles
`;

export const EyeButton = styled.button`
  position: absolute;
  right: -10px; 
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;


export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: blue;
  color: white;
  width: 100%;
  margin: 0 auto; 
`;

export const CheckBoxContainer = styled.div`

`;
export const Span = styled.span`
margin-top: 10px;
  `
export const CheckInput = styled.input`
  margin-bottom: 15px;
`;
export const H1 = styled.h1`
font-size:3rem;
text-align: center;

`
export const Div = styled.div`
position:relative;
`
export const P = styled.p`
  position: absolute;
  right: 0;
  bottom: -38px;
  max-width: 450px;
`;

export const A = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  &:hover {
text-decoration: underline;
}
`;

export const ColorText = styled.span`
  color: teal;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;