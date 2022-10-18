import { Button } from "src/components";

type PreviousButtonProps = {
  activePage: number;
  callback: (page: number) => void;
}

const PreviousButton = ({ activePage, callback }: PreviousButtonProps) => {
  return <> {
    activePage !== 1 &&
    <Button onClick={() => callback(activePage - 1)}>
      Назад
    </Button>
  } </>;
};

export default PreviousButton;