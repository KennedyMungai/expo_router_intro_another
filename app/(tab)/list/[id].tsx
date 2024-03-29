import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const NewsDetailsPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Stack.Screen options={{headerTitle: `News #${id}`}} />
			<Text>{id}</Text>
		</View>
	)
}

export default NewsDetailsPage
