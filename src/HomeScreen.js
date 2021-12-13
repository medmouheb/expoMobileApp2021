import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to map"
                onPress={() => navigation.navigate('MapApp')}
            />
            <Button
                title="Go to ListOfItems"
                onPress={() => navigation.navigate('ListOfItems')}
            />
            <Button
                title="Go to signup"
                onPress={() => navigation.navigate('SignUp')}
            />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}