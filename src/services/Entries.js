import {Alert} from 'react-native';

import { getRealm } from "./Realm";
import 'react-native-get-random-values';
import { getUUID } from './UUID';
import moment from '../vendors/moment';

export const getEntries = async (days, category) => {

    let realm = await getRealm();
    realm = realm.objects("Entry");

    if(days > 0){
        const date = moment().subtract(days, 'days').toDate();
        console.log('getEntries :: days', days);
        realm = realm.filtered('entryAt >= $0', date);

    }
    if(category && category.id){
        console.log('getEntries :: category', JSON.stringify(category));
        realm = realm.filtered('category == $0', category);
    }

    const entries = realm.sorted('entryAt', true)

    console.log(JSON.stringify(entries));
    return entries
}
export const saveEntry = async (value, entry = {}) => {
    const realm = await getRealm();
    let data = {};

    try {
        realm.write(() =>{
            data = {
                id: value.id || entry.id || getUUID(),
                amount: value.amount || entry.amount,
                entryAt: value.entryAt || entry.entryAt,
                description: value.category.name,
                isInit: false,
                category:value.category || entry.category,
            };
            realm.create("Entry", data);
        });
        
        console.log("saveEntry :: data", JSON.stringify(data) );
    } catch (error) {
        console.log("saveEntry :: error on save object:",error);
        Alert.alert("Erro ao salvar os dados de lançamento.")
    }
    return data
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