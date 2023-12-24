import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback } from 'react-native';
import * as Linking from 'expo-linking';
import Footer from './Footer'
import Header from './Header'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <SafeAreaView style={styles.iconTray} >
                <View style={styles.icon}>
                    <TouchableHighlight onPress={() => navigation.navigate('Create')} >
                        <Image source={require('../assets/icons/pottery.png')} />
                    </TouchableHighlight>
                    <Text styles={styles.iconLabel}>Create New Project</Text>

                    <TouchableHighlight style={{ marginTop: 35, marginLeft: 20 }} onPress={() => Linking.openURL('https://wsclay.square.site/')} >
                        <Image source={require('../assets/icons/register.png')} />
                    </TouchableHighlight>
                    <Text styles={styles.iconLabel}>Open Studio Sign Up</Text>

                </View>
                <View style={styles.icon}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Projects')}>
                        <Image source={require('../assets/icons/view.png')} />
                    </TouchableWithoutFeedback>
                    <Text styles={styles.iconLabel}>View Existing Projects</Text>


                    <TouchableHighlight style={{ marginTop: 35 }} onPress={() => navigation.navigate('')} >
                        <Image source={require('../assets/icons/schedule.png')} />
                    </TouchableHighlight>
                    <Text styles={styles.iconLabel}>Studio Schedule</Text>
                </View>
            </SafeAreaView>
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',

    },
    iconTray: {
        flex: 5,
        flexDirection: 'row'
    },
    icon: {
        flex: 1,
        alignItems: 'center',
    },
    iconLabel: {
        marginTop: 10,
    }
});
