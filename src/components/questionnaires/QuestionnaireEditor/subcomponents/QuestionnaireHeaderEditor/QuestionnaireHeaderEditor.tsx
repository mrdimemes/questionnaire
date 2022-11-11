import { TextInput, TextArea } from "src/components";

import styles from "./QuestionnaireHeaderEditor.module.sass";

import type { QuestionnaireHeaderEditorProps } from "./types";


const QuestionnaireHeaderEditor = ({
  label,
  setLabel,
  about,
  setAbout,
  className,
}: QuestionnaireHeaderEditorProps) => {

  return (
    <div className={className}>
      <h2>Шапка опроса</h2>

      <div className={styles.field}>
        <label htmlFor="label">Название</label>
        <TextInput name="label" value={label} onChange={setLabel} />
      </div>

      <div className={styles.field}>
        <label htmlFor="about">Описание</label>
        <TextArea name="about" value={about} onChange={setAbout} />
      </div>

    </div>
  );
};

export default QuestionnaireHeaderEditor;