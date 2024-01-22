import React, { createContext, useState } from "react";
import { IHomePageElement } from "../interfaces/HomePageElement";
import { STRING_CONSTANTS } from "../utils/stringConstants";
import { ICurrentIndex } from "../interfaces/currentIndexOfElement";
import { v4 as uuidv4 } from "uuid";

export interface AppProviderComponentProps {
  children: React.ReactNode;
}

interface IContextProps {
  sideBarVisibility: boolean;
  setSideBarVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  childComponent: React.ReactNode;
  setChildComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  homePageElements: IHomePageElement[];
  setHomePageElements: React.Dispatch<React.SetStateAction<IHomePageElement[]>>;
  setChildComponentIndexVisibility: (
    component: React.ReactNode,
    elementIndex?: ICurrentIndex
  ) => void;
  currentIndexElement: ICurrentIndex | undefined;
  setCurrentIndexElement: React.Dispatch<
    React.SetStateAction<ICurrentIndex | undefined>
  >;
  addColumn: boolean;
  setAddColumn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextData: React.Context<IContextProps> = createContext(
  {} as IContextProps
);
const ContextProvider = ({ children }: AppProviderComponentProps) => {
  const [sideBarVisibility, setSideBarVisibility] = useState<boolean>(false);
  const [childComponent, setChildComponent] = useState<React.ReactNode>();
  //Assigning one element into the data array on initial load
  const [homePageElements, setHomePageElements] = useState<IHomePageElement[]>([
    { type: STRING_CONSTANTS.UNSET, id: uuidv4() },
  ]);

  const [currentIndexElement, setCurrentIndexElement] = useState<
    ICurrentIndex | undefined
  >({ elementIndex: null, columnIndex: null });
  const [addColumn, setAddColumn] = useState<boolean>(false);

  /**
   *
   * @param component component to render
   * @param elementIndex this is basically a object which contains both row and column index to update the data
   */
  function setChildComponentIndexVisibility(
    component: React.ReactNode,
    elementIndex?: ICurrentIndex
  ) {
    console.log(homePageElements);

    elementIndex !== null && setCurrentIndexElement(elementIndex);
    setChildComponent(component);
    setSideBarVisibility(true);
  }

  return (
    <ContextData.Provider
      value={{
        sideBarVisibility,
        setSideBarVisibility,
        childComponent,
        setChildComponent,
        homePageElements,
        setHomePageElements,
        setChildComponentIndexVisibility,
        currentIndexElement,
        setCurrentIndexElement,
        addColumn,
        setAddColumn,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
