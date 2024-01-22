import styles from "./ImagePreview.module.css";

interface IImagePreview {
  imageSource?: string;
}

const ImagePreview = ({ imageSource }: IImagePreview) => {
  return (
    <div
      className={`${styles.imagePreviewContainer} ${imageSource ? styles.heightUnset : ""}`}
    >
      {imageSource ? (
        <img src={imageSource} className={styles.image} />
      ) : (
        <div className={styles.noImage}>No Preview Available</div>
      )}
    </div>
  );
};

export default ImagePreview;
