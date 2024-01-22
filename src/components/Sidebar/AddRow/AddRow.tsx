import styles from "./AddRow.module.css";
import columnSVG from "../../../assets/icons/column.svg";
import globalStyles from "../../../styles/global.module.css";
import { useContext } from "react";
import { ContextData } from "../../../context/ContextProvider";
import {
  IHomePageColumnElement,
  IHomePageElement,
} from "../../../interfaces/HomePageElement";
import { STRING_CONSTANTS } from "../../../utils/stringConstants";
import { v4 as uuidv4 } from "uuid";
const COLUMNS: number[] = [1, 2, 3, 4, 5, 6];
const AddRow = () => {
  const {
    currentIndexElement,
    setHomePageElements,
    homePageElements,
    setSideBarVisibility,
  } = useContext(ContextData);

  function setColumnsInElement(columnNo: number) {
    const columnArray: IHomePageColumnElement[] = [];
    const columnLengthArray = new Array(columnNo);
    columnLengthArray.fill(columnNo);
    for (let i of columnLengthArray) {
      columnArray.push({
        contentType: STRING_CONSTANTS.UNSET,
        id: uuidv4(),
      });
    }
    return columnArray;
  }

  function addColumnsToElement(columnNo: number) {
    const homePageElementsData: IHomePageElement[] = [...homePageElements];
    const columnsData = setColumnsInElement(columnNo);
    const elementIndex=currentIndexElement?.elementIndex;
    if (elementIndex!== undefined) {
      homePageElementsData[elementIndex as number] = {
        ...homePageElementsData[elementIndex as number],
        type: STRING_CONSTANTS.ROW,
        columns: columnsData,
      };
    } else {
      homePageElementsData.push({
        type: STRING_CONSTANTS.ROW,
        columns: columnsData,
        id: uuidv4(),
      });
    }
    setSideBarVisibility(false);
    setHomePageElements([...homePageElementsData]);
  }

  return (
    <div className={styles.rowContainer}>
      <div className={styles.header}>Add Row</div>
      <div className={globalStyles.columnsContainer}>
        {COLUMNS.map((columnNo: number) => {
          return (
            <div
              key={columnNo}
              className={globalStyles.column}
              onClick={() => addColumnsToElement(columnNo)}
            >
              <img src={columnSVG} className={globalStyles.icon} />
              {`${columnNo} COLUMN`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddRow;
