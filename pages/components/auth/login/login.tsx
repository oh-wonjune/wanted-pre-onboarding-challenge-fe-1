import React from "react";
import {
  LoginBox,
  Title,
  InputBox,
  AuthInput,
  InputLabel,
  ViewPass,
  AuthActionBox,
  AuthAction,
  SubmitButton,
} from "./styles";

const Login: React.FC = () => {
  return (
    <LoginBox>
      <Title>
        <h1>LOGIN</h1>
      </Title>
      <InputBox>
        <AuthInput type="text" name="" required id="username" />
        <InputLabel htmlFor="username">Username</InputLabel>
      </InputBox>
      <InputBox>
        <AuthInput type="password" name="" required id="password" />
        <ViewPass src="assets/img/view.png" alt="" />
        <InputLabel htmlFor="password">Password</InputLabel>
      </InputBox>
      <SubmitButton type="submit">Login To TodoList</SubmitButton>
      <AuthActionBox>
        <AuthAction href="#">Sign Up</AuthAction>
      </AuthActionBox>
    </LoginBox>
  );
};

export default Login;
