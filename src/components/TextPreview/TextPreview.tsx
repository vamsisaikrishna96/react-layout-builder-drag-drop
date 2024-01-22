import { STRING_CONSTANTS } from "../../utils/stringConstants";
import styles from "./TextPreview.module.css";

interface ITextPreview {
  data: string;
  contentType: string;
}

const TextPreview = ({ data, contentType }: ITextPreview) => {
  function getEmptyTextAsPerContent() {
    switch (contentType) {
      case STRING_CONSTANTS.HEADLINE:
        return "No Headline Preview Available";
      case STRING_CONSTANTS.SUB_HEADLINE:
        return "No Sub Headline Preview Available";
      case STRING_CONSTANTS.PARAGRAPH:
        return "No Paragraph Preview Available";
    }
  }
  return (
    <div
      className={`${styles.textPreviewContainer} ${contentType === STRING_CONSTANTS.SUB_HEADLINE ? styles.textPreviewSubHeadline : contentType === STRING_CONSTANTS.PARAGRAPH ? styles.textPreviewParagraph : ""}`}
    >
      {`${data || getEmptyTextAsPerContent()}`}
    </div>
  );
};

export default TextPreview;
