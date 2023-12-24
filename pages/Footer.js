import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function footer() {
    return (
        <SafeAreaView style={styles.footer}>
            {/* <Text style={styles.footerText}>This is the footer!</Text> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#8C52FF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    footerText: {
        fontSize: 14,
        marginTop: 30
    }
});
