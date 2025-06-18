import { UploadVideo } from "features/videoFeatures/uploadVideo";

import styles from "./styles.module.scss";

export const UploadPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.heading}>Загрузить видео</h1>
      <UploadVideo />
    </>
  );
};
