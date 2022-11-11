import classNames from "classnames";
import { useContext } from "react";

import { Button } from "src/components";

import { QuestionnaireIdContext } from "../../contexts";

import styles from "./Buttons.module.sass";

import type { ButtonsProps } from "./types";


const Buttons = ({ sumbit, remove, className }: ButtonsProps) => {
  const questionnaireId = useContext(QuestionnaireIdContext);

  return (
    <div className={classNames(styles.Buttons, className)}>
      <Button onClick={sumbit} children="Сохранить изменения" />
      {
        questionnaireId !== 0 &&
        <Button onClick={remove} children="Удалить опрос" />
      }
    </div>

  );
};

export default Buttons;