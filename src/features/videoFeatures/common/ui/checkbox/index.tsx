import React from "react";

import styles from "./styles.module.scss";
import { Lock } from "shared/lock";

type Props = { value: boolean; onChange: React.ChangeEventHandler<HTMLInputElement> };

export const Checkbox: React.FC<Props> = ({ value, onChange }) => {
  return (
    <label className={styles.checkbox}>
      Сделать публичным?
      <input type="checkbox" checked={value} onChange={onChange} />
      <Lock locked={!value} />
    </label>
  );
};
