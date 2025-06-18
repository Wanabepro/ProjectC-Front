import { FormButton } from "shared/formButton";
import { useNavigate, useParams } from "react-router-dom";

import { useDeleteVideoMutation } from "./api";

import styles from "./styles.module.scss";

type Props = { disabled?: boolean };

export const DeleteVideo: React.FC<Props> = ({ disabled = false }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [deleteVideo] = useDeleteVideoMutation();

  const onClick = () => {
    if (params.id) {
      try {
        deleteVideo(params.id);
        navigate("/my-videos");
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <FormButton
      type="button"
      text="Удалить"
      disabled={disabled}
      onClick={onClick}
      className={styles.delete}
    />
  );
};
