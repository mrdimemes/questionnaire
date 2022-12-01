import classNames from "classnames";

import { Removeable } from "src/components";
import { withTheme } from "src/HOCs";
import { Question as QuestionModel } from "src/models";

import { Question } from "./subcomponents";
import styles from "./QuestionsList.module.sass";

import type { QuestionsListProps } from "./types";


const QuestionsList = ({
  questions,
  update,
  remove,
  className,
}: QuestionsListProps) => {

  return (
    <div className={classNames(styles.QuestionsList, className)}>
      {
        questions.map((question: QuestionModel, index: number) => {
          return (
            <Removeable
              key={index}
              className={styles.QuestionListItem}
              removeButtonClassName={styles.removeButton}
              remove={() => remove(index)}
              removeCondition={questions.length > 1}
              removeButtonText="Удалить вопрос"
            >
              <Question
                question={question}
                update={(question: QuestionModel) => update(question, index)}
              />
            </Removeable>
          );
        })
      }
    </div>
  );
};

export default withTheme(QuestionsList, styles);