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
import { v4 as uuidv4 } from "uuid";
import { IHomePageElement } from "../../../interfaces/HomePageElement";

const ELEMENTS: string[] = [STRING_CONSTANTS.TEXT, STRING_CONSTANTS.MEDIA];
const AddElement = () => {
  const {
    homePageElements,
    setHomePageElements,
    setSideBarVisibility,
    currentIndexElement,
    addColumn,
    setAddColumn,
  } = useContext(ContextData);

  /**
   *
   * @param columnMedia updates columnmedia from unset to selected type. this function also adds new column. we are checking that by addColumn state variable from context
   */
  function updateColumnData(columnMedia: string) {
    const homePageElementsData = [...homePageElements];
    const homePageElement: IHomePageElement =
      homePageElementsData[currentIndexElement?.elementIndex as number];
    if (homePageElement?.columns) {
      if (addColumn) {
        homePageElement?.columns?.push({
          contentType: columnMedia,
          id: uuidv4(),
        });
      } else {
        if (homePageElement?.columns) {
          homePageElement.columns[currentIndexElement?.columnIndex as number] =
            {
              ...homePageElement?.columns[
                currentIndexElement?.columnIndex as number
              ],
              contentType: columnMedia,
            };
        }
      }
    }

    setHomePageElements([...homePageElementsData]);
    setAddColumn(false);
    setSideBarVisibility(false);
  }

  function handleAndSetDragData(
    e: React.DragEvent<HTMLDivElement>,
    nameOfItem: string
  ) {
    if (e.dataTransfer)
      e.dataTransfer.setData(STRING_CONSTANTS.ITEM_TO_BE_ADDED, nameOfItem);
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
                  draggable
                  onDragStart={(event) =>
                    handleAndSetDragData(event, item.name)
                  }
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
