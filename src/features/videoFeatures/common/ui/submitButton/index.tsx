import clsx from "clsx";

import { FormButton } from "shared/formButton";

import styles from "./styles.module.scss";

type Props = { disabled: boolean; className?: string };

export const Submit: React.FC<Props> = ({ disabled, className }) => {
  return (
    <FormButton
      text="Отправить"
      type="submit"
      disabled={disabled}
      className={clsx(className, styles.submit)}
    />
  );
};
