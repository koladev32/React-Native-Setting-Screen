import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, Divider} from "react-native-elements";
import SettingOption from "./src/components/SettingOption";

export default function App() {
    return (
        <SafeAreaProvider>
            <Header
                leftComponent={{icon: 'arrow-back-ios'}}
                centerComponent={{text: 'Account', style: {fontWeight: "700", fontSize: 15}}}
                statusBarProps={{ barStyle: 'dark-content' }}
                barStyle="light-content"
                backgroundColor={'#F5F5F5'}
                containerStyle={{height: '12%'}}
            />
            <View style={styles.container}>
                <View style={styles.settingContainer}>
                    <Text style={styles.subtitle}>Purchase History</Text>
                    <SettingOption title={'My Orders'} iconName={'redeem'} />
                    <SettingOption title={'Returned Products'} iconName={'redeem'} />
                    <Divider orientation="horizontal" />
                </View>

                <View style={styles.settingContainer}>
                    <Text style={styles.subtitle}>Manage Account</Text>
                    <SettingOption title={'Personal Info'} iconName={'redeem'} />
                    <SettingOption title={'Notifications'} iconName={'redeem'} />
                    <SettingOption title={'Voice Shopping'} iconName={'redeem'} />
                    <Divider orientation="horizontal" />
                </View>

                <View style={styles.settingContainer}>
                    <Text style={styles.subtitle}>Privacy</Text>
                    <SettingOption title={'Privacy Policy'} iconName={'redeem'} />
                    <Divider orientation="horizontal" />
                </View>

                <View style={styles.settingContainer}>
                    <Text style={styles.subtitle}>Customer Service</Text>
                    <SettingOption title={'Help'} iconName={'redeem'} />
                    <SettingOption title={'Feedback'} iconName={'redeem'} />
                    <SettingOption title={'Terms and Conditions'} iconName={'redeem'} />
                    <Divider orientation="horizontal" />
                </View>

                <View style={styles.settingContainer}>
                    <SettingOption title={'Sign Out'} iconName={'logout'} />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%'
    },
    subtitle: {
        fontWeight: "700",
        marginBottom: '2%'
    },
    settingContainer: {
        marginVertical: '3%'
    }
});
