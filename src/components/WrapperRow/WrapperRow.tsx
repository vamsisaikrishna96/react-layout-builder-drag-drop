import styles from "./WrapperRow.module.css";
import addSVG from "../../assets/icons/plus.svg";
import globalStyles from "../../styles/global.module.css";
import AddRow from "../Sidebar/AddRow/AddRow";
import { useContext } from "react";
import { ContextData } from "../../context/ContextProvider";
import deleteSVG from "../../assets/icons/trash.svg";
import arrowUpSVG from "../../assets/icons/arrow-up.svg";
import arrowDownSVG from "../../assets/icons/arrow-down.svg";
import { IHomePageElement } from "../../interfaces/HomePageElement";

export interface IWrapperRow {
  children: React.ReactNode;
  rowID: string;
  rowIndex: number;
  elementsLength: number;
}

const WrapperRow = ({
  children,
  rowID,
  rowIndex,
  elementsLength,
}: IWrapperRow) => {
  const {
    setChildComponentIndexVisibility,
    homePageElements,
    setHomePageElements,
  } = useContext(ContextData);

  /**
   * THis helps to remove row from screen
   */
  function removeRowFromScreen() {
    const updatedHomePageElements: IHomePageElement[] = [
      ...homePageElements.filter(
        (element: IHomePageElement) => element.id !== rowID
      ),
    ];
    setHomePageElements([...updatedHomePageElements]);
  }

  /**
   *
   * @param upwards this decides to shift upwards or downwards
   */
  function shiftRows(upwards?: boolean) {
    const homePageElementsData = [...homePageElements];
    const element = homePageElementsData[rowIndex];
    homePageElementsData.splice(rowIndex, 1);
    homePageElementsData.splice(
      upwards ? rowIndex - 1 : rowIndex - 1,
      0,
      element
    );
    setHomePageElements([...homePageElementsData]);
  }

  return (
    <div className={styles.wrapperRowContainer}>
      <div
        className={styles.wrapperAddRowButton}
        onClick={() => setChildComponentIndexVisibility(<AddRow />)}
      >
        <div className={styles.wrapperAddRowIcon}>
          <img className={globalStyles.icon} src={addSVG} alt="add" />
        </div>
      </div>
      <div
        className={`${styles.wrapperActions} ${styles.wrapperActionIcons} ${rowIndex === 0 ? styles.disabledIcon : ""}`}
      >
        <img
          className={`${globalStyles.icon} `}
          src={deleteSVG}
          onClick={() => removeRowFromScreen()}
        />
      </div>

      <div
        className={`${styles.wrapperActions} ${styles.wrapperMoveUpDownActions}`}
      >
        <img
          className={`${globalStyles.icon} ${rowIndex && rowIndex === 0 ? styles.disabledIcon : ""}`}
          src={arrowUpSVG}
          onClick={() => shiftRows(true)}
        />

        <img
          className={`${globalStyles.icon} ${(rowIndex && rowIndex === 0) || rowIndex === elementsLength - 1 ? styles.disabledIcon : ""}`}
          src={arrowDownSVG}
          onClick={() => shiftRows()}
        />
      </div>
      {children}
    </div>
  );
};

export default WrapperRow;
