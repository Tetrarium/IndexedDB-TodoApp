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

