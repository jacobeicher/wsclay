import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Footer from './Footer'
import Header from './Header';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Item 1',
        image: "../assets/icons/pot.png"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Item 2',
        image: "../assets/icons/pot.png"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Item 3',
        image: "../assets/icons/pot.png"
    },
    {
        id: 'd5849617-ffd0-4f8d-bc01-7cbbd0cc7d2c',
        title: 'Item 4',
        image: "../assets/icons/pot.png"
    },
    {
        id: '782c2108-9283-456b-b1d3-03a9a5949114',
        title: 'Item 5',
        image: "../assets/icons/pot.png"
    },
];
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
        <Image style={styles.thumbnail} source={require('../assets/icons/pot.png')} />
    </TouchableOpacity>

);


export default function Project({ navigation }) {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };
    return (
        <View style={styles.container}>
            <Header />
            <SafeAreaView style={styles.iconTray} >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconTray: {
        flex: 5,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row'


    },
    title: {
        fontSize: 32,
        flex: 1
    },
    thumbnail: {
        flex: 1,
        resizeMode: 'contain'


    }
});
