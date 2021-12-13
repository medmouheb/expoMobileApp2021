const axios = require('axios');


import React from 'react';

import { SafeAreaView, StyleSheet, TextInput, Button  } from 'react-native';

function Login({ navigation }) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const login =()=>{
        console.log("hey",email,password)
        axios.post('http://localhost:8080/api/auth/signin', {
            email,
            password
          })
          .then(function (response) {
            console.log("hey correct",email,password)
            console.log(response);
          })
          .catch(function (error) {
            console.log("hey problem",email,password)
            console.log(error);
          });

          navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <TextInput style={styles.input} placeholder='email' onChangeText={onChangeEmail} value={email} />
            <TextInput secureTextEntry={true} style={styles.input}  placeholder='password' onChangeText={onChangePassword} value={password} />

            <Button
                title="Login"
                onPress={()=>{login()}}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Login;