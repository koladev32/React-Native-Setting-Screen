import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {IconlyProvider} from "react-native-iconly"

interface ISettingOptionProps {
    title: string;
}

const SettingOption: React.FC<ISettingOptionProps> = ({title, children}) => {
    return (
        <View style={{justifyContent: "space-between", marginBottom: '4%'}}>
            <View style={styles.optionComponent}>
                <IconlyProvider primaryColor={'#000'}>
                    {children}
                </IconlyProvider>
                <Text style={{marginLeft: '3%', fontSize: 15}}>{title}</Text>
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