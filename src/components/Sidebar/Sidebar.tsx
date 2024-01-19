import styles from "./Sidebar.module.css";
import closeSVG from "../../assets/icons/close.svg";
import { useContext } from "react";
import { ContextData } from "../../context/ContextProvider";

const Sidebar = () => {
  const { sideBarVisibility, setSideBarVisibility } = useContext(ContextData);

  return (
    <div
      className={`${styles.sidebar} ${sideBarVisibility ? styles.visibleSideBar : ""} `}
    >
      {/* TODO: Drafted work for sidebar shawdow implementation 
        <div className={styles.overlay}></div> */}

      <div className={styles.content}>
        {/* Code for close icon for dismissing sidebar start */}
        <div
          className={styles.dismissBar}
          onClick={() => setSideBarVisibility(false)}
        >
          <img src={closeSVG} className={styles.closeIcon} />
        </div>
        {/* Code for close icon for dismissing sidebar end */}
      </div>
    </div>
  );
};

export default Sidebar;
