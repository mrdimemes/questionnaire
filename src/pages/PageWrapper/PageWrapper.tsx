import { RefObject } from "react";

import styles from "./PageWrapper.module.sass";

type PageWrapperProps = {
  children: any,
  pageRef?: RefObject<HTMLDivElement>
};

const PageWrapper = ({ children, pageRef }: PageWrapperProps) => {
  return (
    <div ref={pageRef} className={styles.body}>
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;