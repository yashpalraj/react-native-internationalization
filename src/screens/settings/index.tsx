import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackTypeParamList } from '../navigation/TypeParamList';
import { t } from 'i18next';

const languages = [
	{ code: 'en', label: t('language:english') },
	{ code: 'fr', label: t('language:french') },
	{ code: 'gu', label: t('language:gujarati') },
];

type Props = StackScreenProps<MainStackTypeParamList, 'SETTINGS_SCREEN'>;

const Settings = ({ navigation, route }: Props) => {
	const { t, i18n } = useTranslation();
	const [lang, changeLang] = useState('en');
	const selectedLanguageCode = i18n.language;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: t('navigate:settings'),
		});
		return () => {};
	}, [navigation, lang]);

	return (
		<View>
			<Text style={styles.language}> {t('common:change_language')}</Text>
			{languages.map((currentLang, i) => {
				const selectedLanguage = currentLang.code === selectedLanguageCode;
				return (
					<Text
						key={i}
						onPress={() => {
							changeLang(currentLang.code);
							i18n.changeLanguage(currentLang.code);
						}}
						style={{
							color: '#000000',
							padding: 10,
							backgroundColor: selectedLanguage ? '#c2185b' : '#FFFFFF',
						}}>
						{currentLang.label}
					</Text>
				);
			})}
		</View>
	);
};
export default Settings;
const styles = StyleSheet.create({
	language: {
		paddingTop: 10,
		textAlign: 'center',
	},
});
