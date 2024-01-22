import styles from "./WrapperColumn.module.css";
import addSVG from "../../assets/icons/plus.svg";
import globalStyles from "../../styles/global.module.css";
import { useContext } from "react";
import { ContextData } from "../../context/ContextProvider";
import deleteSVG from "../../assets/icons/trash.svg";
import editSVG from "../../assets/icons/settings.svg";
import AddElement from "../Sidebar/AddElement/AddElement";
import {
  IHomePageColumnElement,
  IHomePageElement,
} from "../../interfaces/HomePageElement";
import { ICurrentIndex } from "../../interfaces/currentIndexOfElement";
import MediaEditor from "../Sidebar/MediaEditor/MediaEditor";

export interface IWrapperColumn {
  children: React.ReactNode;
  columnID: string;
  rowIndex: number;
  columnIndex: number;
  columnArrayLength: number;
}

const WrapperColumn = ({
  children,
  columnID,
  rowIndex,
  columnIndex,
  columnArrayLength,
}: IWrapperColumn) => {
  const {
    setChildComponentIndexVisibility,
    homePageElements,
    setHomePageElements,
    setAddColumn,
    currentIndexElement,
  } = useContext(ContextData);

  /**
   * as this is not a straight forward task, setting up required states and passing data to the context
   */
  function addColumnToExistingRow() {
    setAddColumn(true);
    const newElementColumnIndex: ICurrentIndex = {
      ...currentIndexElement,
      ...{
        elementIndex: rowIndex,
        columnIndex,
      },
    };
    setChildComponentIndexVisibility(<AddElement />, {
      ...newElementColumnIndex,
    });
  }

  /**
   * Filtering row object first then modifying columns and finally updating the copied object and updating context
   */
  function removeColumnFromRow() {
    // rowIndex,columnID are used to remove the column from row
    const homePageElementsData = [...homePageElements];
    const homePageElementData: IHomePageElement = {
      ...(homePageElementsData[rowIndex] as IHomePageElement),
    };
    homePageElementData.columns = homePageElementData?.columns?.filter(
      (column: IHomePageColumnElement) => column.id !== columnID
    );
    homePageElementsData[rowIndex].columns = [
      ...(homePageElementData.columns as IHomePageColumnElement[]),
    ];
    setHomePageElements([...homePageElementsData]);
  }

  return (
    <div className={styles.wrapperColumnContainer}>
      <div
        className={styles.wrapperAddColumnButton}
        onClick={() => addColumnToExistingRow()}
      >
        <div className={styles.wrapperAddColumnIcon}>
          <img className={globalStyles.icon} src={addSVG} alt="add" />
        </div>
      </div>
      <div className={`${styles.wrapperActions} ${styles.wrapperActionIcons} `}>
        <img
          className={`${globalStyles.icon} `}
          src={editSVG}
          onClick={() =>
            setChildComponentIndexVisibility(<MediaEditor />, {
              columnIndex,
              elementIndex: rowIndex,
            })
          }
        />

        <img
          className={`${globalStyles.icon} ${columnIndex === 0 && columnArrayLength === 1 ? styles.disabledIcon : ""} `}
          src={deleteSVG}
          onClick={() => removeColumnFromRow()}
        />
      </div>

      {children}
    </div>
  );
};

export default WrapperColumn;
