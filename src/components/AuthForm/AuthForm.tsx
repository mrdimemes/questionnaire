import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { AuthOption } from "src/models";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { AuthService } from "src/services";
import { EmailInput, NameInput, PasswordInput, Button } from "src/components";
import { validateAuthForm } from "src/utils/validation";
import { ValidationError } from "src/utils/validation/exceptions";

import styles from "./AuthForm.module.sass";

type AuthFormProps = {
  className?: string,
  authOption: AuthOption,
}

const AuthForm = ({ className, authOption }: AuthFormProps) => {
  const currentTheme = useThemeSelector();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfiramtionRef = useRef<HTMLInputElement>(null);

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

  const validate = (
    email: string,
    name: string,
    password: string,
    passwordConfiramtion: string,
  ) => {
    resetErrors();
    try {
      validateAuthForm(email, name, password, passwordConfiramtion);
    } catch (error) {
      if (!(error instanceof ValidationError)) throw error;
      for (const warning of error.warnings) {
        if (warning.fieldName === "email") setEmailError(warning.message);
        if (warning.fieldName === "name") setNameError(warning.message);
        if (warning.fieldName === "password") setPasswordError(warning.message);
        if (warning.fieldName === "passwordConfirmation") {
          setConfirmationError(warning.message);
        };
      };
    };
  };

  const handleSubmit = () => {
    const email = emailRef.current?.value ?? "";
    const name = nameRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const passwordConfiramtion = passwordConfiramtionRef.current?.value ?? "";

    validate(email, name, password, passwordConfiramtion);
    const isFineForLogin = !emailError && !passwordError;
    const isFineForRegistration =
      isFineForLogin && !nameError && !confirmationError;

    if (authOption === AuthOption.registration && isFineForRegistration) {
      AuthService.registration(email, name, password)
        .then(error => {
          navigate("/");
        });
    } else if (authOption === AuthOption.login && isFineForLogin) {
      AuthService.login(email, password)
        .then(error => {
          navigate("/");
        });
    }
  };

  return (
    <form className={classNames(
      getThemeStyle(styles, currentTheme),
      className,
    )}>
      <div className={styles.content}>
        <div className={styles.field}>
          <div>
            <div className={styles.fieldHeader}>
              <label
                className={styles.required}
                htmlFor="email"
              >
                Электронная почта
              </label>
              <div className={styles.error}>{emailError}</div>
            </div>
          </div>
          <EmailInput name="email" forwardedRef={emailRef} />
        </div>

        {authOption === AuthOption.registration &&
          <div className={styles.field}>
            <div className={styles.fieldHeader}>
              <label
                className={styles.required}
                htmlFor="name"
              >
                Имя
              </label>
              <div className={styles.error}>{nameError}</div>
            </div>
            <NameInput name="name" forwardedRef={nameRef} />
          </div>
        }

        <div className={styles.field}>
          <div className={styles.fieldHeader}>
            <label
              className={styles.required}
              htmlFor="password"
            >
              Пароль
            </label>
            <div className={styles.error}>{passwordError}</div>
          </div>
          <PasswordInput name="password" forwardedRef={passwordRef} />
        </div>

        {authOption === AuthOption.registration &&
          <div className={styles.field}>
            <div className={styles.fieldHeader}>
              <label
                className={styles.required}
                htmlFor="passwordConfiramtion"
              >
                Подтвердите пароль
              </label>
              <div className={styles.error}>{confirmationError}</div>
            </div>

            <PasswordInput
              name="passwordConfiramtion"
              forwardedRef={passwordConfiramtionRef}
            />
          </div>
        }
      </div>

      <Button onClick={handleSubmit}>
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