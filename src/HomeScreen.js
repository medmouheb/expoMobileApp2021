import * as React from 'react';
import { useEffect, useState } from 'react'
import { Button, View, Text ,StyleSheet,ImageBackground} from 'react-native';

export default function HomeScreen({ navigation }) {
    const image = { uri: 'https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/s960x960/157405255_10159128424024321_9196666345857893649_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8631f5&_nc_ohc=gOZIBwH6RXgAX_aZGFL&_nc_ht=scontent.ftun9-1.fna&oh=00_AT-YgwPsOnaJHlhv9dInVSddc8nvED0-Kq98ai9hM8NeTw&oe=61DBC85A' };

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>give blode = save 3 lives</Text>

            <Button
                title="register now"
                onPress={() => navigation.navigate('SignUp')}
            />

        </ImageBackground>
    )
    // return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         <Text>Home Screen</Text>
    //         <Button
    //             title="Go to Details"
    //             onPress={() => navigation.navigate('Details')}
    //         />
    //         <Button
    //             title="Go to map"
    //             onPress={() => navigation.navigate('MapApp')}
    //         />
    //         <Button
    //             title="Go to ListOfItems"
    //             onPress={() => navigation.navigate('ListOfItems')}
    //         />
    //         <Button
    //             title="Go to signup"
    //             onPress={() => navigation.navigate('SignUp')}
    //         />
    //         <Button
    //             title="Go to Login"
    //             onPress={() => navigation.navigate('Login')}
    //         />
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    
});