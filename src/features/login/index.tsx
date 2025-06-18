import React from "react";

export const Login: React.FC = () => {
  return (
    <form>
      <input type="login" placeholder="login" />
      <input type="password" placeholder="password" />
      <button type="submit">Войти</button>
    </form>
  );
};
