import { useContext } from "react";
import {
  IHomePageColumnElement,
  IHomePageElement,
} from "../../interfaces/HomePageElement";
import { STRING_CONSTANTS } from "../../utils/stringConstants";
import EmptyElementHomeScreen from "../EmptyElementHomeScreen/EmptyElementHomeScreen";
import Header from "../Header/Header";
import AddRow from "../Sidebar/AddRow/AddRow";
import AddElement from "../Sidebar/AddElement/AddElement";
import { ContextData } from "../../context/ContextProvider";
import styles from "./Home.module.css";
import TextPreview from "../TextPreview/TextPreview";
import ImagePreview from "../ImagePreview/ImagePreview";
import WrapperRow from "../WrapperRow/WrapperRow";
import WrapperColumn from "../WrapperColumn/WrapperColumn";

const {
  HEADLINE,
  PARAGRAPH,
  SUB_HEADLINE,
  IMAGE,
  UNSET,
  ADD_NEW_ELEMENT,
  ADD_NEW_ROW,
} = STRING_CONSTANTS;
const Home = () => {
  const { homePageElements, currentIndexElement } = useContext(ContextData);
  /**
   *
   * @param indexOfElement index of current element
   * @param column - whole column object
   * @param indexOfColumn - index of current column
   * @param lengthOfColumnArray - column length in row object
   * @returns
   */
  function returnAppropriateColumnComponent(
    indexOfElement: number,
    column: IHomePageColumnElement,
    indexOfColumn: number,
    lengthOfColumnArray: number
  ): React.ReactNode {
    switch (column?.contentType) {
      case UNSET:
        return (
          <EmptyElementHomeScreen
            key={column?.id}
            componentToLoadSidebar={<AddElement />}
            buttonTitle={ADD_NEW_ELEMENT}
            currentIndexElementColumn={{
              ...currentIndexElement,
              elementIndex: indexOfElement,
              columnIndex: indexOfColumn,
            }}
          />
        );
      case HEADLINE:
      case SUB_HEADLINE:
      case PARAGRAPH:
        return (
          <WrapperColumn
            key={column?.id}
            columnID={column?.id}
            rowIndex={indexOfElement}
            columnIndex={indexOfColumn}
            columnArrayLength={lengthOfColumnArray}
          >
            <TextPreview
              data={column?.data || ""}
              key={column?.id}
              contentType={column?.contentType}
            />
          </WrapperColumn>
        );
      case IMAGE:
        return (
          <WrapperColumn
            key={column?.id}
            columnID={column?.id}
            rowIndex={indexOfElement}
            columnIndex={indexOfColumn}
            columnArrayLength={lengthOfColumnArray}
          >
            <ImagePreview key={column?.id} imageSource={column?.data || ""} />
          </WrapperColumn>
        );
      default:
        return (
          <EmptyElementHomeScreen
            key={column?.id}
            componentToLoadSidebar={<AddElement />}
            buttonTitle={ADD_NEW_ELEMENT}
            currentIndexElementColumn={{
              ...currentIndexElement,
              elementIndex: indexOfElement,
              columnIndex: indexOfColumn,
            }}
          />
        );
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.homePageElements}>
        {homePageElements?.map(
          (element: IHomePageElement, indexOfElement: number) => {
            return (
              <div key={element?.id} className={styles.elementWrapper}>
                <WrapperRow
                  rowID={element?.id}
                  rowIndex={indexOfElement}
                  elementsLength={homePageElements?.length}
                >
                  {element.type === STRING_CONSTANTS.UNSET ? (
                    <EmptyElementHomeScreen
                      key={element?.id}
                      currentIndexElementColumn={{
                        ...currentIndexElement,
                        elementIndex: indexOfElement,
                      }}
                      componentToLoadSidebar={<AddRow />}
                      buttonTitle={ADD_NEW_ROW}
                    />
                  ) : (
                    <div
                      key={element?.id}
                      className={styles.homePageColumnsContainer}
                    >
                      {element?.columns?.map(
                        (
                          column: IHomePageColumnElement,
                          indexOfColumn: number
                        ) =>
                          returnAppropriateColumnComponent(
                            indexOfElement,
                            column,
                            indexOfColumn,
                            element?.columns?.length || 1
                          )
                      )}
                    </div>
                  )}
                </WrapperRow>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Home;
