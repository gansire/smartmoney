import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
  
      <FlatList 
          data={entriesGrouped}
          renderItem = {({ item }) => (
            <Text style={styles.entry}>
              - {item.description} - {item.amount}
            </Text>
          )}
      >

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1
    },
    entry:{}
   
});

export default EntrySummaryList;