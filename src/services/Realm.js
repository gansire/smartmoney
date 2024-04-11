import Realm from "realm";
import CategorySchema from "../schemas/CategorySchema";
import EntrySchema from "../schemas/EntrySchema";
import { getAllCategories } from "./Categories";
categoriesLength
export const getRealm = async () =>{
    const realm = await Realm.open({
        schema: [CategorySchema, EntrySchema],
        schemaVersion: 2,
    });
    initDB(realm);
    return realm
};

export const initDB = (realm) =>{
    const categoriesLength = realm.objects('Category').length;
    console.log(`initDB: quantidade de categorias no DB: ${categoriesLength}`);
    
    if(categoriesLength === 0){
        const categories = getAllCategories();
        console.log("initDB :: initing db...");
        try {
            realm.write(() => {
                categories.forEach(category => {
                    console.log(`initDB:: creating category: ${JSON.stringify(category)}`);
                })
                realm.create("Category", category, true)
            })
            
        } catch (error) {
            
        }
    } else{
        console.log(`initDB:: categoories already existing...`);
    }
}