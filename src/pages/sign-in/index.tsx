import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Inputs from "../../components/inputs";
import { Page } from "../../components/page";
import useAuth from "../../hooks/useAuth";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ForgotPasswordButton, Form, Wrapper } from "./styles";

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
      <Page.LogoAndTitle alignItems="center" title="Sign in to your account" />
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
        <Button type="submit" data-testid="sign-in-button">
          Sign in
        </Button>
      </Form>
    </Wrapper>
  );
}
