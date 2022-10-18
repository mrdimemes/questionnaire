import classNames from "classnames";

import { PageButton, PaginationBreak, NextButton, PreviousButton } from "../";

import styles from "./PaginationBar.module.sass";

type PaginationBarProps = {
  className?: string;
  activePage: number;
  totalPages: number;
  callback: (page: number) => void;
}

const PaginationBar = ({
  className,
  activePage,
  totalPages,
  callback,
}: PaginationBarProps) => {

  const getPageButtonNode = (page: number) => {
    return <PageButton
      key={page}
      isActivePage={page === activePage}
      onClick={() => callback(page)}
      children={page}
    />;
  };

  const getPageButtons = () => {
    const content: JSX.Element[] = [];

    if (totalPages <= 14) {
      for (let page = 1; page <= totalPages; page++) {
        content.push(getPageButtonNode(page));
      }
      return content;
    }

    const activeLocalityStart = (activePage < 6) ?
      4 :
      (activePage - 2);
    const activeLocalityEnd = (activePage > totalPages - 5) ?
      (totalPages - 3) :
      (activePage + 2);

    for (let page = 1; page <= 3; page++) {
      content.push(getPageButtonNode(page));
    }
    if (activePage > 6) {
      content.push(<PaginationBreak key="firstBreak" />);
    }
    for (let page = activeLocalityStart; page <= activeLocalityEnd; page++) {
      content.push(getPageButtonNode(page));
    }
    if (activePage < totalPages - 5) {
      content.push(<PaginationBreak key="secondBreak" />);
    }
    for (let page = totalPages - 2; page <= totalPages; page++) {
      content.push(getPageButtonNode(page));
    }
    return content;
  };

  return <>
    {totalPages !== 1 &&
      <div className={classNames(styles.Bar, className)}>
        <PreviousButton
          activePage={activePage}
          callback={callback}
        />

        {getPageButtons()}

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