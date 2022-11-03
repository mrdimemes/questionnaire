import { getCardComponent } from "../../helpers";

import styles from "./RowsView.module.sass";

import type { RowsViewProps } from "./types";


const RowsView = ({ cards }: RowsViewProps) => {
  return (
    <div className={styles.RowsView}>
      {
        cards?.map((card) => getCardComponent(card))
      }
    </div>
  );
};

export default RowsView;