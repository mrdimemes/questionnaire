export type LoadCSVButtonProps = {
  className?: string,
  id: number,
  loadData: () => Promise<object[]>,
  fileName: string,
};