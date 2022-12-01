import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "src/components";
import { QuestionnaireService } from "src/services";
import { ValidationError } from "src/exceptions";
import { FetchError } from "src/api/exceptions";

import { Question } from "./Question";
import { answersReducer } from "./reducers";
import { AnswersDispatchContext } from "./contexts";
import { getAnswerDTO, alertValidationResult } from "./helpers";
import { validateQuestionnaireForm } from "./validators";
import styles from "./QuestionnaireForm.module.sass";

import type { QuestionnaireFormProps } from "./types";


const QuestionnaireForm = ({
  questionnaireId,
  questions,
}: QuestionnaireFormProps) => {

  const [answersMap, answersDispatch] = useReducer(answersReducer, new Map());
  const navigate = useNavigate();

  const handleSubmit = () => {
    const answerDTO = getAnswerDTO(questionnaireId, questions, answersMap);
    try {
      validateQuestionnaireForm(answerDTO);
      QuestionnaireService.sendQuestionnaireAnswer(answerDTO);
      navigate("/");
    } catch (error) {
      if (error instanceof ValidationError) {
        alertValidationResult(error.warnings);
      } else if (error instanceof FetchError) {
        return; //not implemented
      } else throw error;
    };
  };

  return (
    <AnswersDispatchContext.Provider value={answersDispatch}>
      <form>
        {
          questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })
        }

        <div className={styles.buttons}>
          <Button onClick={handleSubmit}>Закончить прохождение</Button>
        </div>
      </form>
    </AnswersDispatchContext.Provider>
  );
};

export default QuestionnaireForm;