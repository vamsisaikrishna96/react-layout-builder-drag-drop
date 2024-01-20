import styles from "./AddRow.module.css";
import columnSVG from "../../../../assets/icons/column.svg";
import globalStyles from "../../../../styles/global.module.css";
const COLUMNS: number[] = [1, 2, 3, 4, 5, 6];
const AddRow = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.header}>Add Row</div>
      <div className={globalStyles.columnsContainer}>
        {COLUMNS.map((columnNo: number) => {
          return (
            <div key={columnNo} className={globalStyles.column}>
              <img src={columnSVG} className={globalStyles.icon} />
              {`${columnNo} COLUMN`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddRow;
