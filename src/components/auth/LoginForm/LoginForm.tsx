import { useState } from "react";
import { TextInput } from "src/components/UI/inputs/TextInput";
import { Input, EmailInput } from "src/components";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (value: string) => setEmail(value);

  return (
    <form>
      <EmailInput name="email" value={email} callback={handleEmail} />



    </form>
  )
}

export default LoginForm