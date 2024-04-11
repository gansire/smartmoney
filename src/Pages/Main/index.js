import React from "react";
import { View, StyleSheet } from "react-native";
import BalancePanel from "../../components/BalancePanel/index";
import EntrySummary from "../../components/EntrySummary/index";
import EntryList from "../../components/EntryList/index";
import Colors from "../../styles/Colors"

const Main = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
			<EntrySummary onPressActionButton = {() => navigation.navigate('Report')}/>
			<EntryList onEntryPress={(entry) => navigation.navigate('NewEntry', {
					entry: entry
				})
				}
				onPressActionButton = {() => navigation.navigate('Report')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	}
})

export default Main;