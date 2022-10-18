import { Button } from "src/components";

type NextButtonProps = {
  activePage: number;
  totalPages: number;
  callback: (page: number) => void;
}

const NextButton = ({
  activePage,
  totalPages,
  callback,
}: NextButtonProps) => {
  return <> {
    activePage !== totalPages &&
    <Button onClick={() => callback(activePage + 1)}>
      Вперёд
    </Button>
  } </>;
};

export default NextButton;