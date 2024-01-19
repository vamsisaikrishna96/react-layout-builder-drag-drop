import React, { createContext, useState } from "react";

export interface AppProviderComponentProps {
  children: React.ReactNode;
}

interface IContextProps {
  sideBarVisibility: boolean;
  setSideBarVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  childComponent: React.ReactNode;
  setChildComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

export const ContextData: React.Context<IContextProps> = createContext(
  {} as IContextProps
);
const ContextProvider = ({ children }: AppProviderComponentProps) => {
  const [sideBarVisibility, setSideBarVisibility] = useState<boolean>(false);
  const [childComponent, setChildComponent] = useState<React.ReactNode>();

  return (
    <ContextData.Provider
      value={{
        sideBarVisibility,
        setSideBarVisibility,
        childComponent,
        setChildComponent,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
