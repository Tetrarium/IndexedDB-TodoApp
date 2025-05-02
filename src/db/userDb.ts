import { DB_NAME, USER_STORE } from "./settings";

export function openUserDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME);

    request.onerror = () => reject(request.error);
    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(USER_STORE)) {
        const objectStore = db.createObjectStore(USER_STORE, {
          keyPath: 'id',
          autoIncrement: true,
        });

        objectStore.createIndex("name", 'name', {
          unique: true,
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
    const request = users.add(user);

    transaction.oncomplete = () => {
      console.log(`Пользователь ${user.name} добавлен в базу данных`);
      resolve('user added');
    };
    transaction.onerror = () => {
      let errorMessage = '';
      if (request.error?.name === 'ConstraintError') {
        errorMessage = 'Пользователь уже существует';
      }

      const error = new Error('Ошибка добавления пользователя: ' + errorMessage);
      console.error(error);

      reject(error);
    };
  });
}

export async function getUserByName(name: string) {
  // const todoDB = await openUserDb();

  console.log(name);
}

