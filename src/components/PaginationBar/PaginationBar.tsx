import classNames from "classnames";

import { NextButton, PreviousButton } from "./subcomponents";
import { getPageButtons } from "./helpers";

import styles from "./PaginationBar.module.sass";

import type { PaginationBarProps } from "./types";


const PaginationBar = ({
  className,
  activePage,
  totalPages,
  callback,
}: PaginationBarProps) => {

  return <>
    {totalPages !== 1 &&
      <div className={classNames(styles.PaginationBar, className)}>
        <PreviousButton
          activePage={activePage}
          callback={callback}
        />

        {
          getPageButtons(totalPages, activePage, callback)
        }

        <NextButton
          activePage={activePage}
          totalPages={totalPages}
          callback={callback}
        />
      </div>
    }
  </>;
};

export default PaginationBar;