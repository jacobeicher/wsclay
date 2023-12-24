import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Footer from './Footer'
import Header from './Header'

export default function CreateScreen({ navigation }) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    return (
        <View style={styles.container}>
            <Header />
            <SafeAreaView style={styles.iconTray} >
                {/* right column */}
                <View style={styles.icon}>
                    <TouchableHighlight onPress={() => console.log(`${name}, ${status}`)} onLongPress={() => console.log("camera Long Pressed")}>
                        <Image source={require('../assets/icons/camera.png')} />
                    </TouchableHighlight>
                    <Text styles={styles.iconLabel}>Add Photo</Text>

                </View>
                {/* left Column */}
                <View style={styles.icon}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Project Name"
                        onChangeText={input => setName(input)}
                        defaultValue={name}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Project Status"
                        onChangeText={input => setStatus(input)}
                        defaultValue={status}
                    />
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
        justifyContent: 'center',
    },
    iconTray: {
        flex: 5,
        flexDirection: 'row'
    },
    icon: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        padding: 3,
        borderRadius: 4,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        minWidth: "90%",
        marginTop: 15
    },
    iconLabel: {
        marginTop: 5,
    }
});
