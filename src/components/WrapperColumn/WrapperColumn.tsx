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

export interface IWrapperColumn {
  children: React.ReactNode;
  columnID: string;
  rowIndex: number;
  columnIndex: number;
}

const WrapperColumn = ({
  children,
  columnID,
  rowIndex,
  columnIndex,
}: IWrapperColumn) => {
  const {
    setChildComponentIndexVisibility,
    homePageElements,
    setHomePageElements,
    setAddColumn,
    currentIndexElement,
  } = useContext(ContextData);

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
      <div
        className={`${styles.wrapperActions} ${styles.wrapperActionIcons} ${columnIndex === 0 ? styles.disabledIcon : ""}`}
      >
        <img
          className={`${globalStyles.icon} `}
          src={editSVG}
          //   onClick={() => addNewColumnToTheRow()}
        />

        <img
          className={`${globalStyles.icon} `}
          src={deleteSVG}
          onClick={() => removeColumnFromRow()}
        />
      </div>

      {children}
    </div>
  );
};

export default WrapperColumn;
