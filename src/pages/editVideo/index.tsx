import { EditVideo } from "features/videoFeatures/editVideo";

import styles from "./styles.module.scss";

export const EditVideoPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.heading}>Редактировать видео</h1>
      <EditVideo />
    </>
  );
};
