import { useContext } from "react";
import styles from "./EmptyElementHomeScreen.module.css";
import { ContextData } from "../../context/ContextProvider";
import { ICurrentIndex } from "../../interfaces/currentIndexOfElement";
import { STRING_CONSTANTS } from "../../utils/stringConstants";

interface IEmptyElementHomePage {
  componentToLoadSidebar: React.ReactNode;
  buttonTitle: string;
  currentIndexElementColumn?: ICurrentIndex;
}

const EmptyElementHomeScreen = ({
  componentToLoadSidebar,
  buttonTitle,
  currentIndexElementColumn,
}: IEmptyElementHomePage) => {
  const {
    setChildComponentIndexVisibility,
    currentIndexElement,
    homePageElements,
    setHomePageElements,
    setSideBarVisibility,
  } = useContext(ContextData);

  function setIndexLoadSideBar() {
    setChildComponentIndexVisibility(componentToLoadSidebar, {
      ...currentIndexElement,
      ...currentIndexElementColumn,
    });
  }

  /**
   *
   * @param event dragEvent which helps to preventDefault behaviour
   */
  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  /**
   *
   * @param event DragEvent which has data we have set from dragStart event in AddElement Component
   */
  function handleOnDrop(event: React.DragEvent<HTMLDivElement>) {
    if (event.dataTransfer) {
      const itemToBeAdded = event.dataTransfer.getData(
        STRING_CONSTANTS.ITEM_TO_BE_ADDED
      ) as string;
      event.preventDefault();
      setColumnElement(itemToBeAdded);
    }
  }

  /**
   *
   * @param item which we select's from AddElement Component. This function does not while adding a column instead of element.
   * @returns
   */
  function setColumnElement(item: string) {
    if (buttonTitle !== STRING_CONSTANTS.ADD_NEW_ELEMENT) return;

    const homePageElementsData = [...homePageElements];
    const { columns } =
      homePageElementsData[currentIndexElementColumn?.elementIndex as number];
    if (columns) {
      columns[currentIndexElementColumn?.columnIndex as number] = {
        ...columns[currentIndexElementColumn?.columnIndex as number],
        contentType: item,
      };
      setHomePageElements([...homePageElementsData]);
      setSideBarVisibility(false);
    }
  }

  return (
    <div className={styles.emptyContainerHomePage}>
      <div
        className={styles.emptySingleRow}
        onDrop={(event) => handleOnDrop(event)}
        onDragOver={(event) => handleDragOver(event)}
      >
        <button
          className={styles.addElementButton}
          onClick={() => setIndexLoadSideBar()}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default EmptyElementHomeScreen;
