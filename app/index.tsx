import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const IndexPage = () => {
	const router = useRouter()

	const handlePress = () => {
		router.replace('/(tab)/')
	}

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Pressable onPress={handlePress}>
				<Text>Login</Text>
			</Pressable>

			<Link href='/register' asChild>
				<Pressable>
					<Text>Register</Text>
				</Pressable>
			</Link>
		</View>
	)
}

export default IndexPage
