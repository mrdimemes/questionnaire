import { useState } from "react";
import { PageWrapper } from "../PageWrapper";

enum AuthOption {
  registration = "REGISTRATION",
  login = "LOGIN"
}

const AuthPage = () => {
  const [option, setOption] = useState(AuthOption.registration);
  const toggleOption = () => {
    if (option === AuthOption.registration) {
      setOption(AuthOption.login)
    } else {
      setOption(AuthOption.registration)
    }

  }
  return (
    <PageWrapper>
      <h1>{option === AuthOption.registration ? "Регистрация" : "Вход"}</h1>
      <button onClick={toggleOption}>
        toggle
      </button>
    </PageWrapper>
  )
}

export default AuthPage