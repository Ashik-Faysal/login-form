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
          <CheckBoxContainer>
            <CheckInput type="checkbox" />
            <Span>Remember Me</Span>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckInput type="checkbox" />
            <Span>Agree to trams and condition</Span>
          </CheckBoxContainer>
          <Button type="submit">Login</Button>
          <div>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </Form>
      </RightSection>
    </Container>
  );
};

export default Login;
