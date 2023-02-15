/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  Container,
  CardContainer,
  CardTop,
  CardMiddle,
  CardBottom,
} from "./styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import { locale } from "../../constants";
import { login } from "../../services";
import {
  getMessageError,
  isEmailError,
  isPasswordError,
} from "../../utils/authHelper";
import { useRouter } from 'next/router';

const LoginLayout = ({ navigateToHome }) => {
  const router = useRouter();
  const theme = useTheme();
  const strings = locale();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLogin = () => {
    login(email, password)
      .then((response) => {
        console.log("responseCont", response);
      })
      .catch((err) => {
        console.log("errorCont", err);
        setError({ code: err.code, message: err.message });
      });
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleFocus = () => {
      setError(null);
  };

  const handleError = (inputName) => {
    // eslint-disable-next-line default-case
    switch (inputName) {
      case "email":
        if (isEmailError(error.code)) {
          return getMessageError(error.code);
        }
        break;
      case "password":
        if (isPasswordError(error.code)) {
          return getMessageError(error.code);
        }
        break;
    }
    return null;
  };

  return (
    <Container theme={theme}>
      <CardContainer width="100%" theme={theme} elevation={3}>
        <CardTop>
          <Typography variant="h4">{strings.login.login}</Typography>
        </CardTop>
        <CardMiddle>
          <TextField
            name="email"
            error={error ? handleError("email") : null}
            width="100%"
            label={strings.login.user}
            value={email}
            onChange={handleInputChange}
            onFocus={handleFocus}
          />
          <TextField
            name="password"
            error={error ? handleError("password") : null}
            width="100%"
            type="password"
            value={password}
            helperText={strings.login.invalid_password}
            label={strings.login.password}
            onChange={handleInputChange}
            onFocus={handleFocus}
          />
        </CardMiddle>
        <CardBottom>
          {error &&
          !isEmailError(error.code) &&
          !isPasswordError(error.code) ? (
            <ErrorMessage error={getMessageError(error.code)} />
          ) : (
            <ErrorMessage />
          )}
          <Button
            width="100%"
            text={strings.login.login}
            onClick={handleLogin}
          />
        </CardBottom>
      </CardContainer>
    </Container>
  );
};

export default LoginLayout;
