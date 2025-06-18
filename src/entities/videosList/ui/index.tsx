import { useDeleteVideoMutation } from "../api";

import styles from "./styles.module.scss";

type Video = { title: string; storagePath: string; id: string };
export const VideosList: React.FC<{ videos: Video[]; setChosen: (chosen: string) => void }> = ({
  videos,
  setChosen,
}) => {
  const [deleteVideo] = useDeleteVideoMutation();

  return (
    <ul className={styles.videos}>
      {videos.map(({ title, storagePath, id }) => (
        <li className={styles.videos__item} key={id}>
          <button
            className={styles.videos__link}
            onClick={(e) => {
              e.preventDefault();
              setChosen(storagePath);
            }}
          >
            {title}
          </button>
          <button
            className={styles.videos__delete}
            onClick={() => deleteVideo({ id, storagePath })}
          >
            Delete video
          </button>
        </li>
      ))}
    </ul>
  );
};
