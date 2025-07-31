import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 36px;
  gap: 40px;

  @media (min-width: 1024px) {
    height: 100vh;
    justify-content: center;
  }
`;

export const LogoAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  img {
    width: 75px;
    height: 75px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 320px;
`;

export const ForgotPasswordButton = styled.button`
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
