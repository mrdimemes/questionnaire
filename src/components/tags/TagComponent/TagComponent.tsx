import classNames from "classnames";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import { withTheme } from "src/HOCs";

import styles from "./TagComponent.module.sass";

import type { TagComponentProps } from "./types";


const TagComponent = ({ tag, className }: TagComponentProps) => {
  const navigate = useNavigate();

  const onClick = (event: SyntheticEvent) => {
    event.stopPropagation();
    navigate("/questionnaires/" + tag.id);
  };

  return (
    <div
      onClick={onClick}
      className={classNames(styles.Tag, className)}
    >
      <div>{tag.label}</div>
      {
        tag.frequency !== 0 &&
        <div className={styles.frequency}>{tag.frequency}</div>
      }
    </div>
  );
};

export default withTheme(TagComponent, styles);