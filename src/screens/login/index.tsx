/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackTypeParamList } from '../../../App';
import { useTranslation } from 'react-i18next';
import { DefaultTheme } from '@react-navigation/native';

type Props = StackScreenProps<MainStackTypeParamList, 'LOGIN_SCREEN'>;

const Login = ({ navigation, route }: Props) => {
	const { t } = useTranslation();
	const onLogin = () => {};
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	return (
		<View>
			<Text
				style={{
					justifyContent: 'space-around',
					alignSelf: 'center',
					fontSize: 20,
					fontWeight: 'bold',
					margin: 5,
					color: DefaultTheme.colors.primary,
				}}>
				{' '}
				{t('common:welcome')}
			</Text>

			<Text
				style={{
					fontSize: 18,
					fontWeight: 'bold',
					margin: 5,
					color: DefaultTheme.colors.primary,
				}}>
				{' '}
				{t('common:username')}
			</Text>
			<TextInput
				value={userName}
				onChangeText={text => setUserName(text)}
				style={{ borderWidth: 2, margin: 5, padding: 5 }}
			/>
			<Text
				style={{
					fontSize: 18,
					fontWeight: 'bold',
					margin: 5,
					color: DefaultTheme.colors.primary,
				}}>
				{' '}
				{t('common:password')}
			</Text>
			<TextInput
				value={password}
				onChangeText={text => setPassword(text)}
				style={{ borderWidth: 2, margin: 5, padding: 5 }}
			/>
			<View style={{ margin: 5, padding: 5 }}>
				<Button
					title={t('common:login')}
					onPress={() => {
						onLogin();
					}}
				/>
			</View>
			<View style={{ margin: 5, padding: 5 }}>
				<Button
					title={t('navigate:settings')}
					onPress={() => {
						navigation.navigate('SETTINGS_SCREEN');
					}}
				/>
			</View>
		</View>
	);
};

export default Login;
