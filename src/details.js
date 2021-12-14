import * as React from 'react';
import { Button, View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
const DATA = [
    { "id": 8183, "uid": "0d1630ed-1eb6-4a85-b9fe-36f22fadf326", "type": "O", "rh_factor": "+", "group": "B-" },
    { "id": 9775, "uid": "8c6eede4-0e89-4e50-ba96-465ea1d41af5", "type": "B", "rh_factor": "+", "group": "O+" },
    { "id": 168, "uid": "9c72c9f5-9ad4-4c9e-bfe2-a5abd48c85bf", "type": "A", "rh_factor": "+", "group": "B-" },
    { "id": 388, "uid": "6e302ec6-78b7-4f2e-8365-92f7dc749fe2", "type": "B", "rh_factor": "-", "group": "O+" },
    { "id": 6705, "uid": "4fbb13c8-9048-438b-8196-80cde73e5fcf", "type": "AB", "rh_factor": "+", "group": "O-" },
    { "id": 1231, "uid": "c57369f5-68be-4845-9a76-fcdbedbcd9aa", "type": "AB", "rh_factor": "-", "group": "O-" },
    { "id": 5915, "uid": "e0e46200-a388-4b10-8165-c00b5c524558", "type": "A", "rh_factor": "-", "group": "AB-" },
    { "id": 3683, "uid": "8fc38fed-ad68-4d55-a303-ddb64ebb9b16", "type": "A", "rh_factor": "-", "group": "AB-" }]

const Item = ({ br }) => (
    <View style={styles.item}>
        <Button 
            color="red"
            title={br.id+""}
            onPress={()=>{alert("thanks for yor donation check out where you can donat in button bellow")}}
            
        />
        <Text style={styles.title}>{"type : "+br.type +"  rh_factor : "+br.rh_factor+" group : "+br.group}</Text>
    </View>
);

export default function DetailsScreen({ route, navigation }) {
    const { email, username } = route.params;
    const renderItem = ({ item }) => <Item br={item} />;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>hello mr {username} or {email} </Text>
            <Text>chose you're blood type</Text>
            <SafeAreaView style={styles.container}>
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
            </SafeAreaView>
            <Button title="hospitals avalable for donations" onPress={() => navigation.navigate('MapApp')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});