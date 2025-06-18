import { useState } from "react";
import { useSendReactionMutation } from "./api";

import styles from "./styles.module.scss";

type Props = { videoId: string; likes: number; dislikes: number };

export const Reactions: React.FC<Props> = ({ videoId, likes, dislikes }) => {
  const [react] = useSendReactionMutation();
  const [reaction, setReaction] = useState<boolean>(null);

  const onLike = () => {
    react({ id: videoId, reaction: "LIKE" });
  };

  const onDislike = () => {
    react({ id: videoId, reaction: "DISLIKE" });
  };

  return (
    <div className={styles.reactions}>
      <label className={styles.reactions__like}>
        <img src="/like.svg" alt="like" />
        <span>{likes}</span>
        <input
          type="checkbox"
          checked={reaction}
          onChange={() => setReaction((prev) => !prev)}
          name="reaction"
        />
      </label>
      <label className={styles.reactions__dislike}>
        <img src="/dislike.svg" alt="dislike" />
        <span>{dislikes}</span>
        <input type="checkbox" checked={!reaction} name="reaction" />
      </label>
    </div>
  );
};
