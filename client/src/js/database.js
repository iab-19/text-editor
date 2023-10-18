import { openDB } from 'idb';

const initdb = async () =>
// create a new database called 'finesse' and user version 1
  openDB('finesse', 1, {
    // Add database schema if it has not already been initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('finesse')) {
        console.log('finesse database already exists');
        return;
      }
      db.createObjectStore('finesse', { keyPath: 'id', autoIncrement: true });
      console.log('finesse database created');
    },
  });


export const putDb = async (content) => {
  // console.error('putDb not implemented');
  console.log('PUT to the database');

  // Create a connection to the database and version we want to use
  const finesseDb = await openDB('finesse', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = finesseDb.transaction('finesse', 'readwrite');

  // Open the desired object store
  const store = tx.objectStore('finesse');

  // Use the .put method to update the data in the database
  const request = store.put({ id:1, value:content });

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
}



export const getDb = async () => {
  // console.error('getDb not implemented');
  console.log('GET from the database');

  // Create a connection to the database and version we want to use
  const finesseDb = await openDB('finesse', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = finesseDb.transaction('finesse', 'readonly');

  // Open the desired object store
  const store = tx.objectStore('finesse');

  // Use the .getAll method to get all data in the database
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};
initdb();
