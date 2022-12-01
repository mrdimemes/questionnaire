import { Select, CheckboxInput } from "src/components";
import { QuestionType } from "src/models";

import styles from "./ConfigBar.module.sass";

import type { ConfigBarProps } from "./types";


const ConfigBar = ({
  setQuestionType,
  setIsRequired,
  isRequired,
}: ConfigBarProps) => {

  const handleQuestionTypeChange = (newType: string) => {
    setQuestionType(newType as QuestionType);
  };
  const toggleIsRequired = () => setIsRequired(!isRequired);

  const typeOptions: [string, string][] = [
    [QuestionType.Checkbox, "Чекбокс"],
    [QuestionType.Radio, "Радио"],
    [QuestionType.Text, "Текст"],
  ];

  return (
    <div className={styles.ConfigBar}>

      <div className={styles.configBlock}>
        <label htmlFor="questionType">Тип вопроса:</label>
        <Select
          name="questionType"
          options={typeOptions}
          onChange={handleQuestionTypeChange}
        />
      </div>

      <div className={styles.configBlock}>
        <label htmlFor="isRequired">Обязательный?</label>
        <CheckboxInput name="isRequired" onChange={toggleIsRequired} />
      </div>

    </div>
  );
};

export default ConfigBar;