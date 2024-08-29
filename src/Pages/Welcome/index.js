import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Colors from '../../styles/Colors';
import Logo from '../../assets/images.jpg';
import WelcomeMessage from './WelcomeMessage/index';
import WelcomeBalanceInput from './WelcomeBalanceInput/index';
import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter/index';
import { saveEntry } from '../../services/Entries';
import { useCategories } from '../../hooks/useCategories';

const Welcome = ({ navigation }) => {
	const [, , , initCategories] = useCategories();
	const [amount, setAmount] = useState(0);

	const onSavePress = () => {
		saveEntry({
			amount: parseFloat(amount),
			isInit: true,
			category: initCategories,
		});
		navigation.navigate("Main")
	};

	return (
		<View style={styles.container}>
			<View style={styles.logo}>
			<Image source={Logo} style={styles.image}/>
			</View>
			<WelcomeMessage/>
			<WelcomeBalanceInput value={amount} onChangeValue={setAmount}/>
			<ActionFooter>
				<ActionPrimaryButton title="Continuar" onPress={onSavePress}/>
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
	logo: {
		alignItems: 'center',
		marginTop: 20
	},
	image:{
		borderRadius: 100,
	}
})

export default Welcome
