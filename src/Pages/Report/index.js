import React from 'react'
import { StyleSheet, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import BalanceLabel from '../../components/BalanceLabel/index';
import EntrySummary from '../../components/EntrySummary/index';
import EntryList from '../../components/EntryList/index';

const Report = () => {

  const currentBalance = "2.064,34";

  const entriesGrouped = [
    {key: "1", description: "Alimentação", amount: 200},
    {key: "2", description:  "Combustivel",  amount: 12},
    {key: "3", description:  "Aluguel",  amount: 120},
    {key: "4", description:  "Lazer",  amount: 250},
    {key: "5", description:  "Outros", amount: 1200},
  ]

  const entries = [
    {key: "1", description: "Padaria Asa Branca", amount: "10"},
    {key: "2", description: "Supermecado Isadora", amount: "190"},
    {key: "3", description: "Posto Ipiranga", amount: "190"},
  ] 

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <Picker>
            <Picker.Item label='Todas Categorias'></Picker.Item>
        </Picker>
        <Picker>
            <Picker.Item label='Ultimos 7 dias'></Picker.Item>
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries= {entries}/>
      <View>
        <Button title = "Salvar"/>
        <Button title = "Fechar"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
})
export default Report
