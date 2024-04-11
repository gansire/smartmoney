import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { saveEntry } from '../../services/Entries'
import BalanceLabel from '../../components/BalanceLabel/index'
import { deleteEntry } from '../../services/Entries';
import Colors from '../../styles/Colors';
import NewEntryInput from './NewEntryInput/index';
const NewEntry = ({navigation}) => {  
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0',
    entryAt: new Date(),
    description: "descrição",
    address: "endereço",
    photo: "foto",
  });
  const [amount, setAmount] =  useState(entry.amount);

  const isValid = () =>{
    if(parseFloat(amount) !== 0){
      return true
    }
    return false
  }

  const onSave = () => {
    const data = {
      amount: parseFloat(amount)
    }
    console.log(data)
    saveEntry(data, entry)
    onClose();
  }

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  }

  const onClose = () => {
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <BalanceLabel/>
      <View>
        <NewEntryInput value={amount} onChangeValue={setAmount}/>
        <TextInput style={styles.input}/>
        <Button title = "GPS"/>
        <Button title = "Camera"/>
      </View>
      <View>
        <Button title = "Adicionar" onPress={() => {
          isValid() && onSave();
        }}/>
        <Button title = "Cancelar" onPress={onClose}/>
        <Button title = "Excluir" onPress={onDelete}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    input: {
        borderColor: "#000",
        borderWidth: 1
    }
})
export default NewEntry;
