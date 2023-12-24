import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

export default function Header() {
    return (
        <SafeAreaView style={styles.header} >
            <Image onPress={() => console.log("pressed")} source={require('../assets/WSCWLogo.png')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
    }
});

