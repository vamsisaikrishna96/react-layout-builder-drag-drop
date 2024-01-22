import styles from "./Header.module.css";
import columnSVG from "../../assets/icons/column.svg";
import elementSVG from "../../assets/icons/element.svg";
import { useContext } from "react";
import { ContextData } from "../../context/ContextProvider";
import AddRow from "../Sidebar/components/AddColumn/AddRow";
import AddElement from "../Sidebar/components/AddElement/AddElement";

const Header = () => {
  const { setSideBarVisibility, setChildComponent } = useContext(ContextData);

  function setChildComponentAndVisibility(component: React.ReactNode) {
    setChildComponent(component);
    setSideBarVisibility(true);
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerActions}>
        <div
          className={styles.headerAction}
          onClick={() => setChildComponentAndVisibility(<AddRow />)}
        >
          <img className={styles.svgIcon} src={columnSVG} /> Add Column
        </div>
        <div
          className={styles.headerAction}
          onClick={() => setChildComponentAndVisibility(<AddElement />)}
        >
          <img className={styles.svgIcon} src={elementSVG} /> Add Element
        </div>
      </div>
    </div>
  );
};

export default Header;
