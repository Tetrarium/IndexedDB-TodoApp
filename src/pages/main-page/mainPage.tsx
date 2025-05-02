import { useState } from "react";

import { addUser, openUserDb } from "@/db/userDb";

import s from "./mainPage.module.sass";

const MainPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={s.mainPage}>
      <button
        className={s.button}
        onClick={() => openUserDb()}
      >Создать базу данных пользователей</button>

      <div>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className={s.button}
          onClick={() => addUser({
            name,
            password
          })}
        >Добавить пользователя</button>
      </div>

    </div>
  );
};

export default MainPage;