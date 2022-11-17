import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthOption } from "src/models";
import { AuthService } from "src/services";
import { Button } from "src/components";
import { ValidationError } from "src/exceptions";

import { validateAuthForm } from "./validators";
import {
  EmailField,
  NameField,
  PasswordField,
  PasswordConfirmationField,
} from "./subcomponents";
import styles from "./AuthForm.module.sass";

import type { AuthFormProps } from "./types";


const AuthForm = ({ authOption, className }: AuthFormProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfiramtion, setPasswordConfiramtion] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmationError, setConfirmationError] = useState("");

  const resetErrors = () => {
    setEmailError("");
    setNameError("");
    setPasswordError("");
    setConfirmationError("");
  };

  const setErrors = (error: ValidationError) => {
    for (const warning of error.warnings) {
      if (warning.fieldName === "email") setEmailError(warning.message);
      if (warning.fieldName === "name") setNameError(warning.message);
      if (warning.fieldName === "password") setPasswordError(warning.message);
      if (warning.fieldName === "passwordConfirmation") {
        setConfirmationError(warning.message);
      };
    };
  };

  const submit = () => {
    try {
      resetErrors();
      validateAuthForm(authOption, email, name, password, passwordConfiramtion);
      if (authOption === AuthOption.registration) {
        AuthService.registration(email, name, password)
          .then(() => navigate("/"));
      } else {
        AuthService.login(email, password).then(() => navigate("/"));
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrors(error);
      } else {
        throw error;
      }
    }
  };

  return (
    <form className={className}>

      <EmailField value={email} setValue={setEmail} error={emailError} />

      {
        authOption === AuthOption.registration &&
        <NameField value={name} setValue={setName} error={nameError} />
      }

      <PasswordField
        value={password}
        setValue={setPassword}
        error={passwordError}
      />

      {
        authOption === AuthOption.registration &&
        <PasswordConfirmationField
          value={passwordConfiramtion}
          setValue={setPasswordConfiramtion}
          error={confirmationError}
        />
      }

      <Button onClick={submit} className={styles.submitButton}>
        {
          authOption === AuthOption.registration ?
            "Зарегистрироваться" :
            "Войти"
        }
      </Button>

    </form>
  );
};

export default AuthForm;