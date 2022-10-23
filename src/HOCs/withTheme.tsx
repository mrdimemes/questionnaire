import { ComponentType } from "react";
import classNames from "classnames";
import { useThemeSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";


type ClassNameProps = {
  className?: string;
};

type ThemeStyles = {
  theme_light: string,
  theme_dark: string
};

export function withTheme<P>(
  Component: ComponentType<P & ClassNameProps>,
  styles: ThemeStyles,
) {
  const ComponentWithTheme = (props: P & ClassNameProps) => {
    const currentTheme = useThemeSelector();
    const themeClassName =
      currentTheme === Theme.Light ?
        styles.theme_light :
        styles.theme_dark;
    return (
      <Component
        {...props}
        className={classNames(props.className, themeClassName)}
      />
    );
  };

  ComponentWithTheme.displayName = Component.name + "WithTheme";
  return ComponentWithTheme;
};