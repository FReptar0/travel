import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import RegisterForm from '../components/account/RegisterForm'

export default function RegisterScreenS() {
  return (
    <View style={styles.view}>
      <Image source={require('../../assets/img/unnamed.png')}
      style={styles.image} />
      <Text>Register Screen</Text>
      <View style={styles.form}>
        <RegisterForm style={styles.formText} />
      </View>
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
  form: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 480,
    textAlign: 'center',
    padding: 10,
    paddingBottom: 20,
  },

})