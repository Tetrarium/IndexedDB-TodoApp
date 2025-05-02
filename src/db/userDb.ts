import { DB_NAME, USER_STORE } from "./settings";

export function openUserDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME);

    request.onerror = () => reject(request.error);
    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(USER_STORE)) {
        db.createObjectStore(USER_STORE, {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
  });
}

interface AddUserDTO {
  name: string;
  password: string;
}

export async function addUser(user: AddUserDTO) {
  const todoDB = await openUserDb();

  return new Promise((resolve, reject) => {
    const transaction = todoDB.transaction(USER_STORE, "readwrite");

    const users = transaction.objectStore(USER_STORE);
    users.add(user);

    transaction.oncomplete = () => {
      console.log(`Пользователь ${user.name} добавлен в базу данных`);
      resolve('user added');
    };
    transaction.onerror = () => {
      const error = new Error('Ошибка добавления пользователя');
      console.error(error);

      reject(error);
    };
  });
}

export async function getUserByName(name: string) {
  const todoDB = await openUserDb();

  console.log(name);
}

