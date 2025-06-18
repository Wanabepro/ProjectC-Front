import clsx from "clsx";

import styles from "./styles.module.scss";

type Props =
  | {
      type: "text" | "password";
      text?: string;
      value: string;
      required?: boolean;
      onChange: React.ChangeEventHandler<HTMLInputElement>;
      className?: string;
    }
  | {
      type: "textarea";
      text?: string;
      value: string;
      required?: boolean;
      onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
      className?: string;
    };

const titleByType: Record<"text" | "textarea" | "password", string> = {
  text: "Название",
  textarea: "Описание",
  password: "Пароль",
};

export const TextInput: React.FC<Props> = ({
  type,
  text,
  required = false,
  value,
  className,
  onChange,
}) => {
  return (
    <label className={clsx(className, styles.textInput)}>
      {type !== "textarea" && (
        <input type={type} required={required} value={value} onChange={onChange} />
      )}
      {type === "textarea" && <textarea value={value} onChange={onChange} required={required} />}
      <span className={clsx(!!value && styles.dirty)}>{text || titleByType[type]}</span>
    </label>
  );
};
