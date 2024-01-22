import { useContext } from "react";
import styles from "./EmptyElementHomeScreen.module.css";
import { ContextData } from "../../context/ContextProvider";
import { ICurrentIndex } from "../../interfaces/currentIndexOfElement";

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
  const { setChildComponentIndexVisibility, currentIndexElement } =
    useContext(ContextData);

  function setIndexLoadSideBar() {
    setChildComponentIndexVisibility(componentToLoadSidebar, {
      ...currentIndexElement,
      ...currentIndexElementColumn,
    });
  }

  return (
    <div className={styles.emptyContainerHomePage}>
      <div className={styles.emptySingleRow}>
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
