import React from "react";
import { useThemeSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";

type ClassNameProps = {
  className: string;
};

type ThemeStyles = {
  theme_light: string,
  theme_dark: string
};

export function withTheme<P>(
  Component: React.ComponentType<P & ClassNameProps>,
  styles: ThemeStyles,
) {
  const ComponentWithTheme = (props: P) => {
    const currentTheme = useThemeSelector();
    const themeClassName =
      currentTheme === Theme.Light ?
        styles.theme_light :
        styles.theme_dark;
    return <Component {...props} className={themeClassName} />;
  };
  return ComponentWithTheme;
};