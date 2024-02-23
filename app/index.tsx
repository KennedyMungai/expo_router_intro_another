import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const IndexPage = () => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>IndexPage</Text>
            <Link href='/register'>Register</Link>
		</View>
	)
}

export default IndexPage
