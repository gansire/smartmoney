import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from '../../../styles/Colors';

const Container = ({ title, actionLabelText, actionButtonText, onPressActionButton, children }) => {
	return (
		<View style={styles.container}>
			{
				title && (
					<Text
						style={styles.title}
					>
						{title}
					</Text>
				)
			}
			{children}
			{
				(actionLabelText || actionButtonText) && (
					<View style={styles.actioncontainer}>
						{
							actionLabelText && (
								<Text style={styles.actionLabel}>
									{actionLabelText}
								</Text>
							)
						}
						{
							actionButtonText && (
								<TouchableOpacity style={styles.actionButton} onPress={onPressActionButton}>
									<Icon name="insert-chart" style={styles.actionButtonIcon} />
									<Text style={styles.actionButtonText}>
										{actionButtonText}
									</Text>
								</TouchableOpacity>
							)
						}
					</View>
				)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.asphalt,
		borderRadius: 5,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: "rgba(255,255,255,0.2)",
		margin: 5,
		padding: 8,
	},
	title: {
		fontSize: 12,
		color: Colors.white,
		marginBottom: 5,
	},
	actioncontainer: {
		flexDirection: 'row',
	},
	actionLabel: {
		flex: 1,
		fontSize: 12,
		color: Colors.white,
	},
	actionButton: {
		flexDirection: 'row'
	},
	actionButtonIcon: {
		color: Colors.white,
		marginTop: 3,
		marginRight: 2
	},
	actionButtonText: {
		fontSize: 12,
		color: Colors.white,
	}

});

export default Container
