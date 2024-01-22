import globalStyles from "../../../styles/global.module.css";
import { STRING_CONSTANTS } from "../../../utils/stringConstants";
import styles from "./AddElement.module.css";
import {
  IElementItem,
  IElementPage,
  addElementPageData,
} from "../../../utils/AddElementPageData";
import { useContext } from "react";
import { ContextData } from "../../../context/ContextProvider";

const ELEMENTS: string[] = [STRING_CONSTANTS.TEXT, STRING_CONSTANTS.MEDIA];
const AddElement = () => {
  const {
    homePageElements,
    setHomePageElements,
    setSideBarVisibility,
    currentIndexElement,
  } = useContext(ContextData);

  function updateColumnData(columnMedia: string) {
    debugger;
    const homePageElementsData = [...homePageElements];
    const { columns } =
      homePageElementsData[currentIndexElement?.elementIndex as number];
    if (columns) {
      columns[currentIndexElement?.columnIndex as number] = {
        ...columns[currentIndexElement?.columnIndex as number],
        contentType: columnMedia,
      };
    }

    setHomePageElements([...homePageElementsData]);
    debugger;
    setSideBarVisibility(false);
  }

  return (
    <div className={styles.addElementContainer}>
      {addElementPageData.map((element: IElementPage, index: number) => {
        return (
          <div key={index} className={styles.elementSection}>
            <div className={styles.elementSectionTitle}>{ELEMENTS[index]}</div>
            <div className={globalStyles.columnsContainer}>
              {element.items.map((item: IElementItem) => (
                <div
                  key={item.name}
                  className={globalStyles.column}
                  onClick={() => updateColumnData(item.name)}
                >
                  <img src={item.image} className={globalStyles.icon} />
                  {`${item.name}`}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddElement;
