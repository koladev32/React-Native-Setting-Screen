import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, Divider} from "react-native-elements";
import SettingOption from "./src/components/SettingOption";
import {
    ChevronLeft,
    InfoCircle,
    Lock,
    Logout,
    Notification,
    User,
    Voice2
} from 'react-native-iconly';

import AppLoading from 'expo-app-loading';
import {useFonts, Inter_300Light} from '@expo-google-fonts/inter';

export default function App() {

    let [fontsLoaded] = useFonts({
        Inter_300Light,
    });


    if (!fontsLoaded) {
        return <AppLoading/>
    } else {
        return (
            <SafeAreaProvider>
                <Header
                    centerComponent={{
                        text: 'Account',
                        style: {fontWeight: "700", fontSize: 15}
                    }}
                    statusBarProps={{barStyle: 'dark-content'}}
                    barStyle="light-content"
                    backgroundColor={'#F5F5F5'}
                    containerStyle={{height: '12%'}}
                >
                    <View style={{marginLeft: '5%'}}>
                        <ChevronLeft color="#000"/>
                    </View>
                </Header>
                <View style={styles.container}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.subtitle}>Purchase History</Text>
                        <SettingOption title={'My Orders'} children={<Image style={styles.customIcon}
                                                                            source={require('./assets/box.png')}/>}/>
                        <SettingOption title={'Returned Products'} children={<Image style={styles.customIcon}
                                                                                    source={require('./assets/box.png')}/>}/>
                        <Divider orientation="horizontal"/>
                    </View>

                    <View style={styles.settingContainer}>
                        <Text style={styles.subtitle}>Manage Account</Text>
                        <SettingOption title={'Personal Info'} children={<User/>}/>
                        <SettingOption title={'Notifications'} children={<Notification/>}/>
                        <SettingOption title={'Voice Shopping'} children={<Voice2/>}/>
                        <Divider orientation="horizontal"/>
                    </View>

                    <View style={styles.settingContainer}>
                        <Text style={styles.subtitle}>Privacy</Text>
                        <SettingOption title={'Privacy Policy'} children={<Lock/>}/>
                        <Divider orientation="horizontal"/>
                    </View>

                    <View style={styles.settingContainer}>
                        <Text style={styles.subtitle}>Customer Service</Text>
                        <SettingOption title={'Help'} children={<Image style={styles.customIcon}
                                                                       source={require('./assets/question-circle.png')}/>}/>
                        <SettingOption title={'Feedback'} children={<Image style={styles.customIcon}
                                                                           source={require('./assets/comments.png')}/>}/>
                        <SettingOption title={'Terms and Conditions'} children={<InfoCircle set={'broken'}/>}/>
                        <Divider orientation="horizontal"/>
                    </View>

                    <View style={styles.settingContainer}>
                        <SettingOption title={'Sign Out'} children={<Logout/>}/>
                    </View>
                </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    subtitle: {
        fontWeight: "700",
        marginBottom: '2%',
        fontFamily: 'Inter_300Light',
        fontSize: 15
    },
    settingContainer: {
        marginVertical: '3%'
    },
    customIcon: {width: 20, height: 20}
});
