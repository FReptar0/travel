import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function LoginForm() {
    const navigation = useNavigation()

    const irRegistro = () => {
        navigation.navigate('RegisterS')
    }

    return (
        <View style={styles.viewForm}>
            <Text style={styles.TextForm}>Iniciar Sesión: </Text>
            <Input placeholder='Email' leftIcon={{ type: 'material-community', name: 'at' }} />
            <Input placeholder='Contraseña' 
            leftIcon={{ type: 'material-community', name: 'lock-outline' }}
            secureTextEntry={true}
            />
            <Button title="Iniciar Sesión" />
            <Text style={styles.login} onPress={irRegistro}>Ir a Registro</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    TextForm: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewForm: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        height: 290,
        textAlign: 'center',
        padding: 10,
        paddingBottom: 20,
    },
    login: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})