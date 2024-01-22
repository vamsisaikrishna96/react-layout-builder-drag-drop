import styles from "./TextPreview.module.css";

interface ITextPreview {
  data: string;
  contentType: string;
}

const TextPreview = ({ data, contentType }: ITextPreview) => {
  return (
    <div className={styles.textPreviewContainer} >
      {`${data || "No Preview Available"}`}
    </div>
  );
};

export default TextPreview;
