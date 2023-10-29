import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Button,
  Form,
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful login for demonstration purposes
    const isLoginSuccessful = true; // Replace with your actual login logic

    if (isLoginSuccessful) {
      // Check if the login button was clicked
      if (
        e.nativeEvent.submitter &&
        e.nativeEvent.submitter.name === "loginButton"
      ) {
        // Show a success toast message for the login button
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
        });

        // Reset input fields
        setEmail("");
        setPassword("");
      }
    } else {
      // Show an error toast message for an unsuccessful login
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
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
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
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
            <CheckInput required type="checkbox" />
            <Span>
              Agree to <ColorText>terms and conditions</ColorText>
            </Span>
          </CheckBoxContainer>
          <Button type="submit" name="loginButton">
            Login
          </Button>
        </Form>
        <Span>
          Don not have an account? <A>Register Here</A>
        </Span>
      </RightSection>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Container>
  );
};

export default Login;
