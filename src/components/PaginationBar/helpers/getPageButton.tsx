import { PageButton } from "../subcomponents";


export const getPageButton = (
  page: number,
  isActive: boolean,
  callback: (page: number) => void,
) => {
  return <PageButton
    key={page}
    isActive={isActive}
    onClick={() => callback(page)}
    children={page}
  />;
};