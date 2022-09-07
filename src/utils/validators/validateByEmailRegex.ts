const validateByEmailRegex = (email: string): string | undefined => {
    const re = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    return re.test(email) ? undefined : "Некорректный адрес почты";
  }

export default validateByEmailRegex