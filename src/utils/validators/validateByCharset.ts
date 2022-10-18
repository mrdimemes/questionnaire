export enum Charset {
  basic = "BASIC",
  extended = "EXTENDED"
}

const validateByCharset =
  (field: string, charset: Charset): string | undefined => {
    const getRegex = (charset: Charset) => {
      if (charset === Charset.basic) return new RegExp(/^[\wА-Яа-я]+$/);
      if (charset === Charset.extended) return new RegExp(/^[\wА-Яа-я<>.,!?:;+*`~@#$%^&-]+$/);
      return new RegExp(/\w*/);
    };
    const re = getRegex(charset);
    return re.test(field) ? undefined : "Недопустимый символ";
  };

export default validateByCharset;
