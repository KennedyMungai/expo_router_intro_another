import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
	return (
		<Tabs>
            <Tabs.Screen name='home' options={{tabBarLabel: 'List', headerTitle: 'Home Screen', tabBarIcon: ({color, size}) => <FontAwesome name="list" size={size} color={color} />}} />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarLabel: 'Account',
                    headerTitle: 'My Account',
                    tabBarIcon: ({color, size}) => <FontAwesome name='user' size={size} color={color} />
                }}
            />
		</Tabs>
	)
}

export default TabsLayout
