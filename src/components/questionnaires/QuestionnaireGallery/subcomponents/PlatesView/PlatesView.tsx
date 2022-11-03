import { getCardComponent } from "../../helpers";

import styles from "./PlatesView.module.sass";

import type { PlatesViewProps } from "./types";


const PlatesView = ({ cards }: PlatesViewProps) => {
  return (
    <div className={styles.PlatesView}>

      <div className={styles.column}>
        {
          cards.filter((_, index) => index % 2 === 0)
            .map((card) => getCardComponent(card))
        }
      </div>

      <div className={styles.column}>
        {
          cards.filter((_, index) => index % 2 !== 0)
            .map((card) => getCardComponent(card))
        }
      </div>

    </div>
  );
};

export default PlatesView;