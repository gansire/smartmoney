import React from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import Geocoder from 'react-native-geocoding';


const NewEntryAddressPicker = ({address, onChange}) => {
	const getLocation = (latitude, longitude) => {
		Geocoder.init('AIzaSyB5MVJft0UNZs282kntXeBgjuzfvEhjlK4');
	
		Geocoder.from({ latitude, longitude }).then(json => {
			const formattedAddress = json.results[0].formatted_address;

			Alert.alert('Localização', formattedAddress, [
				{	
					text: "Cancelar",
					onPress: () => {},
					style: 'cancel'
				},
				{
					text: "Confirmar",
					onPress: () => {onChange(
						{
							latitude: latitude, 
							longitude: longitude,
							address: formattedAddress
						}
					);},
				}
			]);
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
	
	const onButtonPress = () => {
		if(address){
			Alert.alert('Localização', address, [
				{
					text: 'Apagar',
					onPress: () => {
						onChange({
							latitude: null,
							longitude: null,
							address: '',
						})
					},
					style: 'cancel'
				},
				{
					text: 'Ok',
					onPress: () => {
						console.log('Ok Pressed');
					}
				}
			]);
		}else{
			getPosition()
		}
	}

	return (
		<View>
			<TouchableOpacity style={[styles.button, address ? styles.buttonActived: '']} onPress={onButtonPress}>
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
	},
	buttonActived:{
		backgroundColor: Colors.blue
	}
})
export default NewEntryAddressPicker
