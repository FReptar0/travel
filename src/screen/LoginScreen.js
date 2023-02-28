import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function LogScreen() {
  const navigation = useNavigation()
  
  const irRegistro = () => {
    console.log('Registro')
    navigation.navigate('RegisterS')
  }
  return (
    <View style={styles.view}>
      <Image source={require('../../assets/img/unnamed.png')}
      style={styles.image} />
      <Text>Login Screen</Text>
      <Text onPress={irRegistro}>Ir a Registro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 100,
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})