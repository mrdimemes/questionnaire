import classNames from "classnames";

import { Field } from "src/models";
import { withTheme } from "src/HOCs";

import { getFieldComponent } from "./helpers";
import styles from "./Question.module.sass";

import type { QuestionProps } from "./types";


const Question = ({ className, question }: QuestionProps) => {
  const getField = (field: Field) => {
    const Field = getFieldComponent(question.questionType);
    return <Field
      key={field.id}
      questionId={question.id}
      fieldId={field.id}
      text={field.text}
    />;
  };

  return (
    <div className={classNames(styles.Question, className)}>
      <p className={classNames(
        styles.text,
        question.isRequired ? styles.required : null,
      )}>
        {question.text}
      </p>
      <div className={styles.fields}>
        {question.fields.map(field => getField(field))}
      </div>
    </div>
  );
};

export default withTheme(Question, styles);