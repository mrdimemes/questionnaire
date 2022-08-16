import axios from "axios";
import { useEffect, useState } from "react";
import { PageWrapper } from "../PageWrapper";
import { Questionnaire } from "src/models/questionnaire/Questionnaire";
import { QuestionnaireComponent } from "src/components";

const QuestionnairePage = () => {
  const [questionnaire, setQuestionnaire] = useState<Questionnaire>();



  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/questionnaire.json").then(
      (res) => {
        setQuestionnaire(res.data.questionnaire);
      }
    )
  }, []);

  return (
    <PageWrapper>
      {questionnaire &&
        <QuestionnaireComponent questionnaire={questionnaire} />}
    </PageWrapper>
  )
}

export default QuestionnairePage