import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { AuthOption } from "src/models";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { AuthService } from "src/services";
import { EmailInput, NameInput, PasswordInput, Button } from "src/components";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "src/utils/validators";

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
  const [confiramtionError, setConfiramtionError] = useState("");

  const resetErrors = () => {
    setEmailError("");
    setNameError("");
    setPasswordError("");
    setConfiramtionError("");
  };

  const validateForm = (
    email: string,
    name: string,
    password: string,
    passwordConfiramtion: string,
  ) => {
    resetErrors();

    const emailValidation = validateEmail(email);
    if (emailValidation) setEmailError(emailValidation);
    const nameValidation = validateName(name);
    if (nameValidation) setNameError(nameValidation);
    const passwordValidation = validatePassword(password);
    if (passwordValidation) setPasswordError(passwordValidation);
    const passwordsIsSame = password === passwordConfiramtion;
    if (!passwordsIsSame) setConfiramtionError("Пароли не совпадают");

    const isFineForLogin = !emailValidation && !passwordValidation;
    const isFineForRegistration =
      !emailValidation &&
      !nameValidation &&
      !passwordValidation &&
      passwordsIsSame;
    return [isFineForLogin, isFineForRegistration];
  };

  const handleSubmit = () => {
    const email = emailRef.current?.value ?? "";
    const name = nameRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const passwordConfiramtion = passwordConfiramtionRef.current?.value ?? "";

    const [isFineForLogin, isFineForRegistration] = validateForm(
      email, name, password, passwordConfiramtion,
    );
    if (authOption === AuthOption.registration && isFineForRegistration) {
      AuthService.registration(email, name, password)
        .then(error => {
          if (error) return;
          navigate("/");
        });
    } else if (authOption === AuthOption.login && isFineForLogin) {
      AuthService.login(email, password)
        .then(error => {
          if (error) return;
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
              <div className={styles.error}>{confiramtionError}</div>
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