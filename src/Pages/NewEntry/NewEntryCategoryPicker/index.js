import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Modal, FlatList, View, StyleSheet } from 'react-native';
import { getAllCategories } from '../../../services/Categories';
import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [allCategories, setAllCategories] = useState([]);
	
	useEffect(() => {
		async function loadCategories(){
			const data =  await getAllCategories();
			console.log("data", data);
			setAllCategories(data)
		}

		loadCategories();

		console.log("NewEntryCategoryPicker :: useEffect")
	},[]);
	
	return (
		<View>
			<TouchableOpacity style={styles.pickerButton} onPress={() => {
				setModalVisible(true);
			}}>
				<Text style={styles.pickerButtonText}>
					Alimentação
				</Text>
			</TouchableOpacity>
			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
			>
				<View style={styles.modal}>
					<FlatList
						data={allCategories}
						keyExtractor={item => item.id}
						renderItem={({item}) => (
							<TouchableOpacity>
								<Text>
									{item.name}
								</Text>
							</TouchableOpacity>
						)}
					/>
				</View>

				<TouchableOpacity 
					onPress={() => {
						setModalVisible(false);
					}}
				>
					<Text>
						Fechar
					</Text>
				</TouchableOpacity>
			</Modal>
		</View>
	)
}
const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	pickerButton: {
		backgroundColor: Colors.asphalt,
		borderRadius: 15,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 20
	},
	pickerButtonText:{
		fontSize: 28,
		color: Colors.white,
		textAlign: 'center'
	}	
})
export default NewEntryCategoryPicker
