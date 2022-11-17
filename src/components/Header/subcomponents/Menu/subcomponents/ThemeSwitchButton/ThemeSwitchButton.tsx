import classNames from "classnames";
import { useThemeSelector, useAppDispatch } from "src/redux/hooks";
import { Theme, setTheme } from "src/redux/slices/themeSlice";
import { Button } from "src/components";
import { withTheme } from "src/HOCs";

import styles from "./ThemeSwitchButton.module.sass";

import type { ThemeSwitchButtonProps } from "./types";

const ThemeSwitchButton = ({ className }: ThemeSwitchButtonProps) => {
  const dispatch = useAppDispatch();
  const currentTheme = useThemeSelector();

  const toggleTheme = () => {
    if (currentTheme === Theme.Light) {
      dispatch(setTheme(Theme.Dark));
    } else {
      dispatch(setTheme(Theme.Light));
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(styles.body, className)}
    />
  );
};

export default withTheme(ThemeSwitchButton, styles);