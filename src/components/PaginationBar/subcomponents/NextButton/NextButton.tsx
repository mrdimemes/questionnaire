import { Button } from "src/components";

import type { NextButtonProps } from "./types";


const NextButton = ({
  activePage,
  totalPages,
  callback,
}: NextButtonProps) => {
  return <> {
    activePage !== totalPages &&
    <Button onClick={() => callback(activePage + 1)}>Вперёд</Button>
  } </>;
};

export default NextButton;