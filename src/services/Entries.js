import {Alert} from 'react-native';

import { getRealm } from "./Realm";
import 'react-native-get-random-values'
import uuid from '../../node_modules/uuid/dist/v4';

export const getEntries = async () => {
    const realm = await getRealm();
    const entries = realm.objects('Entry');

    console.log(JSON.stringify(entries));
    return entries
}
export const saveEntry = async (value, entry = {}) => {
    const realm = await getRealm();
    let date = {};
    let myuuid = uuid();
    try {
        realm.write(() =>{
            date = {
                id: value.id || entry.id || myuuid,
                amount: value.amount || entry.amount,
                description: value.description || entry.description,
                address: value.address || entry.address,
                photo: value.photo || entry.photo,
                entryAt: value.entryAt || entry.entryAt,
                isInit:  false,
            };
            realm.create("Entry", date, true);
        });
        
        console.log("saveEntry :: data", JSON.stringify(date) );
    } catch (error) {
        console.log("saveEntry :: error on save object:", JSON.stringify(date));
        Alert.alert("Erro ao salvar os dados de lançamento.")
    }
    return date
};

export const deleteEntry = async (entry) => {
    const realm = await getRealm();

    try {
        realm.write(() =>{
            realm.delete(entry)
        })
    } catch (error) {
        console.log("deleteEntry :: error on delete object:", JSON.stringify(entry));
        Alert.alert("Erro ao excluir este lançamento.")
    }
}