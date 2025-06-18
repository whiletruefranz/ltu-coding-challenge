import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabsNavigator } from './TabsNavigator'

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}
