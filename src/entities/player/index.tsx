import styles from "./styles.module.scss";

type Props = { link: string };

export const Player: React.FC<Props> = ({ link }) => {
  return (
    <div className={styles.player__container}>
      <video className={styles.player} controls>
        <source src={link} type="video/mp4" />
      </video>
    </div>
  );
};
