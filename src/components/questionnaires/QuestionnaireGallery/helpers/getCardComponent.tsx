import { QuestionnaireCardComponent } from "../subcomponents";

import type { QuestionnaireCard } from "src/types";


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