import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Inputs from "../../components/Inputs";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../utils/context/AuthContext/useAuthContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 36px;
  gap: 40px;
`;

const LogoAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  img {
    width: 75px;
    height: 75px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 320px;
`;

const ForgotPasswordButton = styled.button`
  font-family: Helvetica;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  color: #0075eb;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignInPage() {
  const { register, handleSubmit } = useForm<SignInFormData>();
  const { authenticate } = useAuth();
  const { setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  function onSubmit(data: SignInFormData) {
    authenticate(data)
      ?.then(() => {
        setIsAuthenticated(true);
        navigate("/all-photos");
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }

  function handleForgotPassword(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.alert("Your password has been sent to your email address");
  }

  return (
    <Wrapper>
      <LogoAndTitle>
        <img src={logo} alt="clever-real-state-logo" />
        <h1>Sign in to your account</h1>
      </LogoAndTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs.TextWithLabel
          autoFocus
          {...register("email")}
          placeholder="testing@testing.com"
          title="Email"
          type="email"
          id="email"
          required
        />
        <Inputs.TextWithLabel
          actionComponent={
            <ForgotPasswordButton type="button" onClick={handleForgotPassword}>
              Forgot password?
            </ForgotPasswordButton>
          }
          {...register("password")}
          placeholder="●●●●●●●"
          title="Password"
          type="password"
          id="password"
          required
        />
        <Inputs.Button type="submit">Sign in</Inputs.Button>
      </Form>
    </Wrapper>
  );
}
