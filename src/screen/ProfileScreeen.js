import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreeen() {
    const navigation = useNavigation();
    const cerrarSesion = async() => {
        const auth = getAuth();
        await signOut(auth)
        navigation.navigate("IndexS")
    }
    return (
        <View>
            <Text>ProfileScreeen</Text>
            <Button title="Cerrar sesión" onPress={cerrarSesion} buttonStyle={styles.button} titleStyle={styles.title}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#e3e3e3",
        borderBottomColor: "#e3e3e3",
        marginTop: 30,
        paddingVertical: 10
    },
    title: {
        color: "#0D5BD7"
    }
})