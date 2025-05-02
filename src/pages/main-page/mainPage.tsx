import { useState } from "react";

import { addUser, openUserDb } from "@/db/userDb";

import s from "./mainPage.module.sass";

const MainPage = () => {
  const [name, setName] = useState('');
  const [password] = useState('');



  return (
    <div className={s.mainPage}>
      <button
        className={s.button}
        onClick={() => openUserDb()}
      >Создать базу данных пользователей</button>

      <form className={s.form}>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={s.input}
        />
        <button
          className={s.button}
          onClick={() => addUser({
            name,
            password
          })}
        >Добавить пользователя</button>
      </form>

    </div>
  );
};

export default MainPage;