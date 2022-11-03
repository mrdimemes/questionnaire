import { QuestionnaireCard } from "src/models";

import { QuestionnaireCardComponent } from "../subcomponents";


export const getCardComponent = (card: QuestionnaireCard) => {
  return (
    <QuestionnaireCardComponent
      key={card.id}
      id={card.id}
      label={card.label}
      tags={card.tags}
    />
  );
};