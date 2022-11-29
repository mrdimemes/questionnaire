import classNames from "classnames";

import { Button } from "src/components";

import styles from "./Buttons.module.sass";

import type { ButtonsProps } from "./types";


const Buttons = ({
  sumbit,
  remove,
  className,
  isQuestionnaireNew,
}: ButtonsProps) => {

  return (
    <div className={classNames(styles.Buttons, className)}>
      <Button onClick={sumbit} children="Сохранить изменения" />
      {
        !isQuestionnaireNew &&
        <Button onClick={remove} children="Удалить опрос" />
      }
    </div>
  );
};

export default Buttons;