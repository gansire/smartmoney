import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import BalanceLabel from '../../components/BalanceLabel/index'
import Colors from '../../styles/Colors';
import NewEntryDatePicker from './NewEntryDatePicker/index';
import NewEntryInput from './NewEntryInput/index';
import NewEntryCategoryPicker from './NewEntryCategoryPicker/index';
import NewEntryDeleteAction from './NewEntryDeleteAction/index';
import NewEntryAddressPicker from './NewEntryAddressPicker/index';
import ActionFooter, {ActionPrimaryButton, ActionSecondaryButton} from '../../components/Core/ActionFooter/index';
import { useEntries } from '../../hooks/useEntries';

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

  const [, saveEntry, deleteEntry] = useEntries()

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
          <NewEntryAddressPicker/>
          <NewEntryDeleteAction entry={entry} onOkPress={onDelete}/>
        </View>
      </View>
      <ActionFooter>
        <ActionPrimaryButton 
          title={entry.id ? 'Salvar': 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <ActionSecondaryButton
          title="Cancelar" 
          onPress={onClose}
        />
      </ActionFooter>
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
