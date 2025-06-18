import { useEffect, useState } from "react";

import { keycloak } from "shared/keycloak";
import { useGetProfileDataQuery, useUpdateProfileDataMutation } from "./api";
import { TextInput } from "shared/textInput";
import { FormButton } from "shared/formButton";

import type { ProfileData } from "./api";

import styles from "./styles.module.scss";

export const Profile: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const { data: profileData } = useGetProfileDataQuery();
  const [updateProfile, { isSuccess }] = useUpdateProfileDataMutation();

  useEffect(() => {
    if (isSuccess) {
      keycloak.login();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (profileData) {
      setUsername(profileData.username);
      setEmail(profileData.email);
    }
  }, [profileData]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const body: Partial<ProfileData> = {};

    if (profileData?.username !== username) {
      body.username = username;
    }

    if (profileData?.email !== email) {
      body.email = email;
    }

    if (password) {
      body.password = password;
    }

    if (password === confirm) {
      updateProfile(body as ProfileData);
    }
  };

  return (
    <form className={styles.form} action="" onSubmit={onSubmit}>
      <h1>Изменить данные пользователя</h1>
      <TextInput
        required={false}
        type="text"
        text="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="text"
        text="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        text="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        text="Подтвердите пароль"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <FormButton type="submit" text="Изменить" className={styles.submit} />
      {isSuccess && <p>Success</p>}
    </form>
  );
};
