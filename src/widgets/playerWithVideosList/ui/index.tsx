import { useLazyGetVideoLinkQuery, useGetVideosQuery } from "../api";
import { VideosList } from "entities/videosList";

import styles from "./styles.module.scss";

export const PlayerWithVideosList: React.FC = () => {
  const { data: videos } = useGetVideosQuery();
  const [getLink, { data: videoLink }] = useLazyGetVideoLinkQuery();

  return (
    <div className={styles.player__container}>
      <div className={styles.player}>
        {videoLink && (
          <video key={videoLink} className={styles.player__video} controls>
            <source src={videoLink} type="video/mp4" />
          </video>
        )}
      </div>
      <div className={styles.list}>
        {videos && <VideosList videos={videos} setChosen={getLink} />}
      </div>
    </div>
  );
};
