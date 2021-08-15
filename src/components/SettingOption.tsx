import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "react-native-elements";

interface ISettingOptionProps {
    title: string;
    iconName: string
}

const SettingOption: React.FC<ISettingOptionProps> = ({title, iconName}) => {
    return (
        <View style={{justifyContent: "space-between", marginBottom: '4%'}}>
            <View style={styles.optionComponent}>
                <Icon name={iconName} iconStyle={{}}/>
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