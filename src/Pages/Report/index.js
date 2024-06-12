import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import BalanceLabel from '../../components/BalanceLabel/index';
import EntrySummary from '../../components/EntrySummary/index';
import EntryList from '../../components/EntryList/index';
import Colors from '../../styles/Colors';
import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RelativeDaysModal from '../../components/RelativeDaysModal/index';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  }

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <BalanceLabel/>
      <View>
        <TouchableOpacity 
          style={styles.filterButton} 
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}
        >
          <Text style={styles.filterButtonText}>
            Últimos 7 dias
          </Text>
          <Icon 
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <RelativeDaysModal isVisible={relativeDaysModalVisible} onConfirm={onRelativeDaysPress} onCancel={onRelativeDaysClosePress}/>
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} />
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
  },
  filterButton:{
    flexDirection: 'row',
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal:5
  },
  filterButtonText:{
    color: Colors.champagneDark,
  }
})
export default Report
