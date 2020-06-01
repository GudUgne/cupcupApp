import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Heading} from "../components/Heading";
import {Input} from "../components/Input";
import {FilledButton} from "../components/FilledButton";
import {TextButton} from "../components/TextButton";
import {Error} from "../components/Error";
import { AntDesign } from '@expo/vector-icons';
import {AuthContainer} from "../components/AuthContainer";
import {AuthContext} from "../context/AuthContext";

export  function RegistrationScreen({navigation}) {
    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('em@gmail.com');
    const [password, setPassword] = React.useState('abc');
    return (
        <AuthContainer>
            <AntDesign style={styles.closeIcon}
                       name="closecircleo"
                       size={24}
                       color="black"
                       onPress={() => {
                           navigation.pop();
                       }}
            />
            <Heading style={styles.title}>REGISTRATION</Heading>
            <Error error={''} />
            <Input
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <FilledButton
                title={'Register'}
                style={styles.loginButton}
                onPress={() => {
                    register(email, password);
                }}
            />
        </AuthContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 32,
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        right: 16,
    },
});
