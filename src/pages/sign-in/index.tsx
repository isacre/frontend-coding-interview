import logo from "../../assets/logo.svg";
import Inputs from "../../components/inputs";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../utils/context/AuthContext/useAuthContext";
import { Wrapper, LogoAndTitle, Form, ForgotPasswordButton } from "./styles";

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
    window.alert("We refreshed our database, please sign in again");
    localStorage.clear();
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
          data-testid="email-input"
        />
        <Inputs.TextWithLabel
          actionComponent={
            <ForgotPasswordButton
              data-testid="forgot-password-button"
              type="button"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </ForgotPasswordButton>
          }
          {...register("password")}
          placeholder="●●●●●●●"
          title="Password"
          type="password"
          id="password"
          required
          data-testid="password-input"
        />
        <Inputs.Button type="submit" data-testid="sign-in-button">
          Sign in
        </Inputs.Button>
      </Form>
    </Wrapper>
  );
}
