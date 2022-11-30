import { useState, useRef, MouseEventHandler } from "react";
import { CSVLink } from "react-csv";

import { Button } from "src/components";

import styles from "./LoadCSVButton.module.sass";

import type { LoadCSVButtonProps as Props } from "./types";


const LoadCSVButton = ({ className, id, loadData, fileName }: Props) => {
  const [data, setData] = useState<object[]>([]);
  const linkRef = useRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  >(null);


  const onButtonClick: MouseEventHandler<HTMLAnchorElement> = () => {
    loadData()
      .then(loadedData => {
        setData(loadedData);
        linkRef.current?.link.click();
      });
  };

  return (
    <>
      <Button
        className={className}
        onClick={onButtonClick}
      />
      <CSVLink
        className={styles.link}
        data={data}
        filename={fileName}
        ref={linkRef}
        onClickCapture={event => event.stopPropagation()}
      />
    </>

  );
};

export default LoadCSVButton;