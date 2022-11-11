export type RemoveableProps = {
  className?: string,
  removeCondition: boolean,
  children: JSX.Element,
  remove: () => void,
  removeButtonText?: string,
  removeButtonClassName?: string,
};