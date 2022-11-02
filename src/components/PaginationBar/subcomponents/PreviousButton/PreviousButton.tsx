import { Button } from "src/components";

import type { PreviousButtonProps } from "./types";


const PreviousButton = ({ activePage, callback }: PreviousButtonProps) => {
  return <> {
    activePage !== 1 &&
    <Button onClick={() => callback(activePage - 1)}>Назад</Button>
  } </>;
};

export default PreviousButton;