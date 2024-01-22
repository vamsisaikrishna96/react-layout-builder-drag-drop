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

const {
  HEADLINE,
  PARAGRAPH,
  SUB_HEADLINE,
  IMAGE,
  COLUMN,
  UNSET,
  ADD_NEW_ELEMENT,
  ADD_NEW_ROW,
} = STRING_CONSTANTS;
const Home = () => {
  const { homePageElements, currentIndexElement } = useContext(ContextData);
  // TODO: for future drag drop implementation prototype
  // function handleDragOver(e:React.DragEvent)
  // {
  //   console.log("DragOber",e);
  //   e.preventDefault();

  // }

  // function handleOnDrop(e:React.DragEvent)
  // {

  //   console.log("Dragged",e.dataTransfer.getData("widgetDData"));

  // }

  function returnAppropriateColumnComponent(
    indexOfElement: number,
    column: IHomePageColumnElement,
    indexOfColumn?: number
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
          <TextPreview
            data={column?.data}
            key={column?.id}
            contentType={column?.contentType}
          />
        );
      case IMAGE:
        return (
          <ImagePreview key={column?.id} imageSource={column?.data || ""} />
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

      {/* <div className={styles.homeDrag} onDrop={(e)=>handleOnDrop(e)} onDragOver={(e)=>handleDragOver(e)}>


</div> */}
      <div className={styles.homePageElements}>
        {homePageElements?.map(
          (element: IHomePageElement, indexOfElement: number) => {
            return (
              <div key={element?.id} className={styles.elementWrapper}>
                <WrapperRow rowID={element?.id} rowIndex={indexOfElement} elementsLength={homePageElements?.length}>
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
                            indexOfColumn
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
