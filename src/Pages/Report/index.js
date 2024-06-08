import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import {Picker} from '@react-native-picker/picker';

import BalanceLabel from '../../components/BalanceLabel/index';
import EntrySummary from '../../components/EntrySummary/index';
import EntryList from '../../components/EntryList/index';
import Colors from '../../styles/Colors';
import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter/index';

const Report = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel/>
      <View>
        <Picker>
            <Picker.Item label='Todas Categorias'></Picker.Item>
        </Picker>
        <Picker>
            <Picker.Item label='Ultimos 7 dias'></Picker.Item>
        </Picker>
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList/>
      </ScrollView>
      
      <ActionFooter>
        <ActionPrimaryButton 
          title="Fechar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ActionFooter>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  }
})
export default Report
