import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const ListPage = () => {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Link href='/list/1'>News Item One</Link>
			<Link href='/list/2'>News Item Two</Link>
			<Link href='/list/3'>News Item Three</Link>
		</View>
	)
}

export default ListPage
