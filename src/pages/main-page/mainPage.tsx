import { addUser, openUserDb } from "@/db/userDb";

import s from "./mainPage.module.sass";

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <button
        className={s.button}
        onClick={() => openUserDb()}
      >Создать базу данных пользователей</button>

      <button
        className={s.button}
        onClick={() => addUser({
          name: 'Uasya',
          password: '123'
        })}
      >Добавить пользователя</button>
    </div>
  );
};

export default MainPage;