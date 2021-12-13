const axios = require('axios');


import React from 'react';

import { SafeAreaView, StyleSheet, TextInput, Button  } from 'react-native';

function SignUp({ navigation }) {
    const [username, onChangeUsername] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const signup =()=>{
        console.log("hey",username,email,password)
        axios.post('http://localhost:8080/api/auth/signup', {
            username,
            email,
            password,
            "roles":["user"]
          })
          .then(function (response) {
            console.log("hey correct",username,email,password)
            console.log(response);
          })
          .catch(function (error) {
            console.log("hey problem",username,email,password)
            console.log(error);
          });

          navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <TextInput style={styles.input} placeholder='username' onChangeText={onChangeUsername} value={username} />
            <TextInput style={styles.input} placeholder='email' onChangeText={onChangeEmail} value={email} />
            <TextInput secureTextEntry={true} style={styles.input}  placeholder='password' onChangeText={onChangePassword} value={password} />

            <Button
                title="SignUP"
                onPress={()=>{signup()}}
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

export default SignUp;