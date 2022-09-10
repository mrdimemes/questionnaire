import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import classNames from "classnames";
import { AuthOption } from "src/models";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { AuthService } from "src/services";
import { EmailInput, NameInput, PasswordInput, Button } from "src/components";
import {
  validateEmail,
  validateName,
  validatePassword
} from "src/utils/validators";
import styles from "./AuthForm.module.sass";

type AuthFormProps = {
  className?: string,
  authOption: AuthOption,
}

const AuthForm = ({ className, authOption }: AuthFormProps) => {
  const currentTheme = useAppSelector(themeSelector);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfiramtion, setPasswordConfiramtion] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confiramtionError, setConfiramtionError] = useState("");

  const resetErrors = () => {
    setEmailError("");
    setNameError("");
    setPasswordError("");
    setConfiramtionError("");
  }

  const handleSubmit = () => {
    resetErrors();
    const emailValidation = validateEmail(email);
    if (emailValidation) setEmailError(emailValidation);
    const nameValidation = validateName(name);
    if (nameValidation) setNameError(nameValidation);
    const passwordValidation = validatePassword(password);
    if (passwordValidation) setPasswordError(passwordValidation);
    const passwordsIsSame = password === passwordConfiramtion;
    if (!passwordsIsSame) setConfiramtionError("Пароли не совпадают");
    if (
      authOption === AuthOption.registration &&
      !emailValidation &&
      !nameValidation &&
      !passwordValidation &&
      passwordsIsSame
    ) {
      AuthService.registration(email, name, password)
        .then(error => {
          if (error) return console.log(error);
          navigate("/");
        })
    } else if (
      authOption === AuthOption.login &&
      !emailValidation &&
      !passwordValidation
    ) {
      AuthService.login(email, password)
        .then(error => {
          if (error) return console.log(error);
          navigate("/");
        })
    }
  }

  return (
    <form className={classNames(
      getThemeStyle(styles, currentTheme),
      className
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
          <EmailInput name="email" value={email} callback={setEmail} />
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
            <NameInput name="name" value={name} callback={setName} />
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
          <PasswordInput
            name="password"
            value={password}
            callback={setPassword}
          />
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
              value={passwordConfiramtion}
              callback={setPasswordConfiramtion}
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
  )
}

export default AuthForm