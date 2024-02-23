import { Link } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const IndexPage = () => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>IndexPage</Text>
			<Link href='/register' asChild>
				<Pressable>
					<Text>Register</Text>
				</Pressable>
			</Link>
		</View>
	)
}

export default IndexPage
