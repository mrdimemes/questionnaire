import styles from "./PageWrapper.module.sass";

type PageWrapperProps = {
  children: any
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.body}>
      <div className="wrapper">
        {children}
      </div>
    </div>
  )
}

export default PageWrapper