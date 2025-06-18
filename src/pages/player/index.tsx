import { useParams, useSearchParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import { useGetVideoQuery } from "./api";
import { Player } from "entities/player";
import { Lock } from "shared/lock";

import styles from "./styles.module.scss";
import { Reactions } from "features/reaction";

export const Video: React.FC = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { data } = useGetVideoQuery(
    params.id ? { id: params.id, isMy: searchParams.get("private") === "true" } : skipToken
  );

  if (data) {
    return (
      <>
        <Player link={data.videoUrl} />
        <article className={styles.videoInfo}>
          <header className={styles.videoInfo__header}>
            <div className={styles.videoInfo__headerInfo}>
              <p>
                <span>{data.owner}</span>
                {searchParams.get("private") === "true" && <Lock locked={true} />}
              </p>
              <p className={styles.videoInfo__date}>
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className={styles.videoInfo__controls}>
              {params.id && (
                <Reactions
                  videoId={params.id}
                  likes={data.reactions.LIKE || 0}
                  dislikes={data.reactions.DISLIKE || 0}
                />
              )}
            </div>
          </header>
          <h1 className={styles.videoInfo__heading}>{data.title}</h1>
          <p className={styles.videoInfo__description}>{data.description}</p>
        </article>
      </>
    );
  }
};
