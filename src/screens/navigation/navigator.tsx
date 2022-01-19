import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { MainStackTypeParamList } from './TypeParamList';
import Settings from '../settings';
import Login from '../login';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator<MainStackTypeParamList>();

function Navigator() {
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

export default Navigator;
