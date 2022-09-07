import { useState } from "react";
import { PageWrapper } from "../PageWrapper";
import { AuthForm, Button } from "src/components";
import { AuthOption } from "src/models/auth/AuthOption";
import styles from "./AuthPage.module.sass";

const AuthPage = () => {
  const [authOption, setAuthOption] = useState(AuthOption.login);
  const toggleOption = () => {
    if (authOption === AuthOption.registration) {
      setAuthOption(AuthOption.login)
    } else {
      setAuthOption(AuthOption.registration)
    }
  }

  return (
    <PageWrapper>
      <h1>
        {authOption === AuthOption.registration ?
          "Регистрация" :
          "Вход"}
      </h1>
      <AuthForm className={styles.form} authOption={authOption} />
      <div className={styles.switchBar}>
        <div>
          {authOption === AuthOption.registration ?
            "Уже зарегистрированы?" :
            "Нет аккаунта?"}
        </div>
        <Button onClick={toggleOption}>
          {authOption === AuthOption.registration ?
            "Войдите!" :
            "Зарегистрируйтесь!"}
        </Button>
      </div>


    </PageWrapper>
  )
}

export default AuthPage