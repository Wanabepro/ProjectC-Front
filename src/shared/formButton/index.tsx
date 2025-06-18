import React from "react";

import styles from "./style.module.scss";
import clsx from "clsx";

type Props = {
  text: string;
  type: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export const FormButton: React.FC<Props> = ({
  text,
  type,
  disabled = false,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(className, styles.button)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
