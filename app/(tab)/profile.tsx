import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProfilePage = () => {
	return (
		<View>
			<Text>
				<Link href='/'>Log Out</Link>
			</Text>
		</View>
	)
}

export default ProfilePage
