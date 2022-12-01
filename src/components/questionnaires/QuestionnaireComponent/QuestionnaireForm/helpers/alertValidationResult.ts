import { ValidationWarning } from "src/models";


export const alertValidationResult = (warnings: ValidationWarning[]) => {
  window.alert(
    "Ошибка валидации. Форма не отправлена. Обнаруженные ошибки: " +
    warnings.map(warning => warning.message).join("; ") + ".",
  );
};