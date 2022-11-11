import { TextArea } from "src/components";

import styles from "./QuestionTextEditor.module.sass";

import type { QuestionTextEditorProps } from "./types";


const QuestionTextEditor = ({ text, setText }: QuestionTextEditorProps) => {
  return (
    <div>
      <label htmlFor="text">Текст вопроса</label>
      <TextArea
        className={styles.questionText}
        name="text"
        value={text}
        onChange={setText}
      />
    </div>
  );
};

export default QuestionTextEditor;