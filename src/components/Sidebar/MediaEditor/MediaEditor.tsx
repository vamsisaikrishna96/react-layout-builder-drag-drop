import { useContext, useEffect, useRef, useState } from "react";
import styles from "./MediaEditor.module.css";
import { ContextData } from "../../../context/ContextProvider";
import { IHomePageColumnElement } from "../../../interfaces/HomePageElement";

import { STRING_CONSTANTS } from "../../../utils/stringConstants";

const MediaEditor = () => {
  const {
    homePageElements,
    setHomePageElements,
    currentIndexElement,
    setSideBarVisibility,
  } = useContext(ContextData);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>();
  const [mediaType, setMediaType] = useState<string>();

  useEffect(() => {
    setDataInEditor();
  });

  /**
   * setting media type and data from homepagelements data from context
   */
  function setDataInEditor() {
    const homePageElementsData = [...homePageElements];
    if (homePageElementsData) {
      const homePageElement =
        homePageElementsData[currentIndexElement?.elementIndex as number];
      if (homePageElement?.columns && homePageElement?.columns?.length) {
        const currentColumn: IHomePageColumnElement =
          homePageElement?.columns[currentIndexElement?.columnIndex as number];

        if (inputRef.current)
          inputRef.current.value = currentColumn?.data || "";
        setMediaType(currentColumn?.contentType);
      }
    }
  }

  /**
   * updating data of column after clicking of submit
   */
  function setMediaToColumn() {
    const homePageElementsData = [...homePageElements];
    const { columns } =
      homePageElementsData[currentIndexElement?.elementIndex as number];
    if (columns) {
      columns[currentIndexElement?.columnIndex as number] = {
        ...columns[currentIndexElement?.columnIndex as number],
        data: inputRef?.current?.value,
      };
    }

    setHomePageElements([...homePageElementsData]);
    setSideBarVisibility(false);
  }

  return (
    <div className={styles.mediaEditorContainer}>
      <div className={styles.header}>Media Editor</div>
      <div className={styles.inputContainer}>
        <div
          className={styles.inputTitle}
        >{`Enter ${mediaType === STRING_CONSTANTS.IMAGE ? "URL" : "Text"}`}</div>
        <input type="text" className={styles.inputField} ref={inputRef} />
      </div>
      <button
        className={`${styles.submitButton} `}
        onClick={() => setMediaToColumn()}
      >
        Submit
      </button>
    </div>
  );
};

export default MediaEditor;
