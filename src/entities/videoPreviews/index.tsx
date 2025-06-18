import { VideoPreview } from "./ui/videoPreview";

import type { VideoPreview as Video } from "./types";

import styles from "./styles.module.scss";

type Props = { videos: Video[]; editable?: boolean };

export const VideoPreviews: React.FC<Props> = ({ videos, editable }) => {
  return (
    <ul className={styles.list}>
      {videos.map((video) => (
        <li key={video.id}>
          <VideoPreview {...video} editable={editable} />
        </li>
      ))}
    </ul>
  );
};
