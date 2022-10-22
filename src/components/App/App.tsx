import classNames from "classnames";
import { useEffect } from "react";
import { QuestionnaireService } from "src/services";
import { Header, AppRoutes } from "src/components";
import { withTheme } from "src/HOCs";

import styles from "./App.module.sass";

import type { AppProps } from "./AppProps";


function App({ className }: AppProps) {
  useEffect(() => {
    QuestionnaireService.getTags();
  }, []);

  return (
    <div className={classNames(styles.App, className)}>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default withTheme(App, styles);