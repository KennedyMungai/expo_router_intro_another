import { Stack } from 'expo-router'
import React from 'react'

const NewsLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{headerTitle: ''}} />
		</Stack>
	)
}

export default NewsLayout
