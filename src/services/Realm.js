import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 5,
  });

  // dropDB(realm);
  initDb(realm);

  return realm;
};

export const initDb = realm => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`initDb :: Quantidade de categorias no BD: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log(`initDB :: Initing db...`);
    let contador = 0;
    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB :: creating category: ${JSON.stringify(category)}`,
          );
          realm.create('Category', category, true);
        });
      });
    } catch (error) {
      console.log("error creating category",error);
    }
  } else {
    console.log(`initDB :: Categories already exists... Skipping`);
  }
};

export const dropDB = realm => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll();
  });
};
