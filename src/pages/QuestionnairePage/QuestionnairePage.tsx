import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/redux/hooks";
import { PageWrapper } from "../PageWrapper";
import { Question } from "src/models/questionnaire/Question";
import { TagComponent } from "src/components";

const QuestionnairePage = () => {
  const [label, setLabel] = useState<string>();
  const [tags, setTags] = useState<number[]>();
  const [about, setAbout] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>();

  const tagsMap = useAppSelector((state) => {
    const tagsMap = new Map<number, string>();
    for (const tag of state.tags.tags) {
      tagsMap.set(tag.id, tag.label)
    }
    return tagsMap
  });

  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/questionnaire.json").then(
      (res) => {
        setLabel(res.data.questionnaire.label);
        setTags(res.data.questionnaire.tags);
        setAbout(res.data.questionnaire.about);
        setQuestions(res.data.questionnaire.questions);
      }
    )
  }, []);

  return (
    <PageWrapper>
      <h1>{label}</h1>
      <div className="tags"> {
        tags?.map((tagId) => {
          return <TagComponent label={"" + tagsMap.get(tagId)} />
        })
      } </div>
      <p>{about}</p>
      <div className="questoins"> {
        questions?.map((question) => {
          return <div>
            <p>ID = {question.id}</p>
            <p>TYPE = {question.questionType}</p>
            <p>TEXT = "{question.text}"</p>
          </div>
        })
      } </div>
    </PageWrapper>
  )
}

export default QuestionnairePage