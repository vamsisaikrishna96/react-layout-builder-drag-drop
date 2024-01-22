import styles from "./Header.module.css";
import columnSVG from "../../assets/icons/column.svg";
import elementSVG from "../../assets/icons/element.svg";
import { useContext } from "react";
import { ContextData } from "../../context/ContextProvider";
import AddRow from "../Sidebar/AddRow/AddRow";
import AddElement from "../Sidebar/AddElement/AddElement";

const Header = () => {
  const { setChildComponentIndexVisibility } = useContext(ContextData);

  return (
    <div className={styles.header}>
      <div className={styles.headerActions}>
        <div
          className={styles.headerAction}
          onClick={() => setChildComponentIndexVisibility(<AddRow />)}
        >
          <img className={styles.svgIcon} src={columnSVG} /> Add Column
        </div>
        <div
          className={styles.headerAction}
          onClick={() => setChildComponentIndexVisibility(<AddElement />)}
        >
          <img className={styles.svgIcon} src={elementSVG} /> Add Element
        </div>
      </div>
    </div>
  );
};

export default Header;
