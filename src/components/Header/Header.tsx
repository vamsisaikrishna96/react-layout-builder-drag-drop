import styles from "./Header.module.css";
import columnSVG from "../../assets/icons/column.svg";
import elementSVG from "../../assets/icons/element.svg";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerActions}>
        <div className={styles.headerAction}>
          <img className={styles.svgIcon} src={columnSVG} /> Add Column
        </div>
        <div className={styles.headerAction}>
          <img className={styles.svgIcon} src={elementSVG} /> Add Element
        </div>
      </div>
    </div>
  );
};

export default Header;
