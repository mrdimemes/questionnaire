const validateByEmailRegex = (email: string) => {
  const re = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  const isValid = re.test(email);
  return [isValid, isValid ? undefined : "Некорректный адрес почты"];
}

export default validateByEmailRegex