import globalStyles from "../../../../styles/global.module.css";
import { STRING_CONSTANTS } from "../../../../utils/stringConstants";
import styles from "./AddElement.module.css";
import {
  IElementItem,
  IElementPage,
  addElementPageData,
} from "../../../../utils/addElementPageData";

const ELEMENTS: string[] = [STRING_CONSTANTS.TEXT, STRING_CONSTANTS.MEDIA];
const AddElement = () => {
  return (
    <div className={styles.addElementContainer}>
      {addElementPageData.map((element: IElementPage, index: number) => {
        return (
          <div className={styles.elementSection}>
            <div className={styles.elementSectionTitle}>{ELEMENTS[index]}</div>
            <div className={globalStyles.columnsContainer}>
              {element.items.map((item: IElementItem) => (
                <div key={item.name} className={globalStyles.column}>
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
