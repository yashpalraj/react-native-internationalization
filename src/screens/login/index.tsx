import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackTypeParamList } from '../navigation/TypeParamList';
import { useTranslation } from 'react-i18next';

type Props = StackScreenProps<MainStackTypeParamList, 'LOGIN_SCREEN'>;

const Login = ({ navigation, route }: Props) => {
	const { t } = useTranslation();
	const onLogin = () => {};
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	return (
		<View>
			<Text> Hi, welcome to Login Screen</Text>
			<TextInput
				placeholder={t('common:username')}
				value={userName}
				onChangeText={text => setUserName(text)}
				style={{ borderWidth: 2, margin: 5, padding: 5 }}
			/>
			<TextInput
				placeholder={t('common:password')}
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
