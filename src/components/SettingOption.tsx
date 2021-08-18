import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {IconlyProvider} from "react-native-iconly"
import {useFonts, Inter_400Regular} from '@expo-google-fonts/inter';

interface ISettingOptionProps {
    title: string;
}

const SettingOption: React.FC<ISettingOptionProps> = ({title, children}) => {

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    return (
        <View style={{justifyContent: "space-between", marginBottom: '4%'}}>
            <View style={styles.optionComponent}>
                <IconlyProvider primaryColor={'#000'}>
                    {children}
                </IconlyProvider>
                <Text style={{
                    marginLeft: '3%', fontSize: 15, fontFamily: 'Inter_400Regular'
                }}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    optionComponent: {
        flexDirection: 'row',
        alignItems: "center",
    }
});

export default SettingOption;