export type NewTagWidgetProps = {
  callback: (tag: number) => void;
  ignoredTags: number[];
  className?: string;
};