import React from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import Geocoder from 'react-native-geocoding';

const getLocation = (latitude, longitude) => {
	Geocoder.init('AIzaSyB5MVJft0UNZs282kntXeBgjuzfvEhjlK4');

	Geocoder.from({ latitude, longitude }).then(json => {
		const formattedAddress = json.results[0].formatted_address;
		Alert.alert('Endereço formatado', formattedAddress);
	}).catch(error => {
		console.error("NewEntryAddressPicker:: getLocation :: erro ao recuperar a localização", error);
		Alert.alert('Houve um erro ao recuperar a posição, por favor, tenha certeza que autorizou este aplicativo');
	});
}

const getPosition = () => {
	Geolocation.getCurrentPosition(pos => {
		const latitude = pos.coords.latitude;
		const longitude = pos.coords.longitude;
		getLocation(latitude, longitude);
	}, error => {
		console.error("NewEntryAddressPicker:: getPosition :: erro ao recuperar a posição", error);
	});
	Alert.alert('Houve um erro ao recuperar a posição, por favor, tenha certeza que autorizou este aplicativo');
}

const NewEntryAddressPicker = () => {
	const onButtonPress = () => {
		getPosition()
	}

	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={onButtonPress}>
				<Icon name="person-pin" size={30} color={Colors.white} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 150,
		backgroundColor: Colors.asphalt,
		width: 59,
		height: 59,
		marginHorizontal: 3
	}
})
export default NewEntryAddressPicker
