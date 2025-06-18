import { Link } from "react-router-dom";
import clsx from "clsx";

import type { VideoPreview as Video } from "entities/videoPreviews/types";

import styles from "./styles.module.scss";

export const VideoPreview: React.FC<Video & { editable?: boolean }> = ({
  id,
  title,
  accessPublic,
  createdAt,
  owner,
  imageUrl,
  editable,
}) => {
  return (
    <Link to={"/video/" + id + `?private=${editable}`} className={styles.preview}>
      {editable && (
        <div
          className={clsx(
            styles.preview__status,
            accessPublic ? styles["preview__status--public"] : styles["preview__status--private"]
          )}
        >
          {accessPublic ? "Public" : "Private"}
        </div>
      )}
      {editable && (
        <Link to={`/edit-video/${id}`} className={styles.preview__edit}>
          <img src="/edit.svg" alt="" />
        </Link>
      )}
      <img
        className={styles.preview__image}
        src={imageUrl || "/icon.svg"}
        alt="Preview of the video"
      />
      <div className={styles.preview__info}>
        <h2 className={styles.preview__title}>{title}</h2>
        <div className={styles.preview__bottom}>
          <p className={styles.preview__owner}>{owner}</p>
          <p className={styles.preview__subtitle}>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};
