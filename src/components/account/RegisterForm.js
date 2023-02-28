import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Input, Icon } from 'react-native-elements'

export default function RegisterForm() {
  return (
    <View>
      <Text style={styles.TextForm}>Registrate: </Text>
        <Input placeholder='Nombre' leftIcon={{ type: 'material-community', name: 'account-outline' }} />
        <Input placeholder='Apellido' leftIcon={{ type: 'material-community', name: 'account-outline' }} />
        <Input placeholder='Email' leftIcon={{ type: 'material-community', name: 'at' }} />
        <Input placeholder='Contraseña' leftIcon={{ type: 'material-community', name: 'lock-outline' }} />
        <Input placeholder='Repetir Contraseña' leftIcon={{ type: 'material-community', name: 'lock-outline' }} />
        <Button title='Registrar' />
    </View>
  )
}

const styles = StyleSheet.create({
    TextForm: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})