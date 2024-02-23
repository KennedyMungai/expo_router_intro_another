import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const IndividualListItem = () => {
	const { id } = useLocalSearchParams<{ id: string }>()

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>{id}</Text>
		</View>
	)
}

export default IndividualListItem
