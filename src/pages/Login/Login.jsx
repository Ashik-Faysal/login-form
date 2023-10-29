import  { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Button,Form,
  Container,
  Image,
  Input,
  LeftSection,
  RightSection,
  PasswordInputContainer,
  EyeButton,
  CheckBoxContainer,
  Span,
  CheckInput,
  H1,
  P,
  Div,
  A,
  ColorText,
} from "../styles/stylesComponent"; // Import your styled components here
import loginImage from "../../assets/loginPage.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Display a toast message
  };

  return (
    <Container>
      <LeftSection>
        <Image src={loginImage} alt="LoginImage" />
      </LeftSection>
      <RightSection>
        <Form onSubmit={handleSubmit}>
          <H1>Login</H1>
          <Div>
            <Input type="email" placeholder="Your email" />
            <PasswordInputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <EyeButton onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </EyeButton>
            </PasswordInputContainer>
            <P>
              <A href="#">Forgot Password?</A>
            </P>
          </Div>
          <CheckBoxContainer>
            <CheckInput type="checkbox" />
            <Span>Remember Me</Span>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckInput type="checkbox" />
            <Span>
              Agree to <ColorText>trams and condition</ColorText>
            </Span>
          </CheckBoxContainer>
          <Button type="submit">Login</Button>
        </Form>
        <Span>
          Don not have an account ? <A>Register Here</A>
        </Span>
      </RightSection>
    </Container>
  );
};

export default Login;
