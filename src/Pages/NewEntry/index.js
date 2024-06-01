import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { saveEntry } from '../../services/Entries'
import BalanceLabel from '../../components/BalanceLabel/index'
import { deleteEntry } from '../../services/Entries';
import Colors from '../../styles/Colors';
import NewEntryDatePicker from './NewEntryDatePicker/index';
import NewEntryInput from './NewEntryInput/index';
import NewEntryCategoryPicker from './NewEntryCategoryPicker/index';
import NewEntryDeleteAction from './NewEntryDeleteAction/index';

const NewEntry = ({navigation}) => {  
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
    description: "descrição",
    address: "endereço",
    photo: "foto",
    category: {
      id: null,
      name: 'Selecione'
    }
  });

  const [debit, setDebit] =  useState(entry.amount <= 0 );
  const [amount, setAmount] =  useState(entry.amount);
  const [category, setCategory] =  useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const isValid = () =>{
    if(parseFloat(amount) !== 0){
      return true
    }
    return false
  }

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt
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
      <View style={styles.formContainer}>
        <NewEntryInput 
          value={amount}
          onChangeDebit={setDebit} 
          onChangeValue={setAmount}
        />

        <NewEntryCategoryPicker 
          debit={debit} 
          category={category} 
          onChangeCategory={setCategory}
        />
        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryDeleteAction entry={entry} onOkPress={onDelete}/>
        </View>
      </View>
      <View>
        <Button title = "Adicionar" onPress={() => {
          isValid() && onSave();
        }}/>
        <Button title = "Cancelar" onPress={onClose}/>
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
  formContainer:{
    flex: 1,
    paddingVertical: 20
  },
  formActionContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  }

})
export default NewEntry;
