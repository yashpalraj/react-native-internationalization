/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Settings from './src/screens/settings';
import Login from './src/screens/login';
import { useTranslation } from 'react-i18next';

export type MainStackTypeParamList = {
	LOGIN_SCREEN: undefined;
	SETTINGS_SCREEN: undefined;
};

function App() {
	const Stack = createStackNavigator<MainStackTypeParamList>();
	const { t } = useTranslation();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					gestureEnabled: true, // If you want to swipe back like iOS on Android
					...TransitionPresets.SlideFromRightIOS,
				}}>
				<Stack.Screen name="LOGIN_SCREEN" component={Login} options={{ title: t('navigate:login') }} />
				<Stack.Screen name="SETTINGS_SCREEN" component={Settings} options={{ title: t('navigate:settings') }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
