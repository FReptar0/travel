import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import LoginForm from '../components/account/LoginForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function LogScreen() {

  const navigation = useNavigation()

  const irRegistro = () => {
    navigation.navigate('RegisterS')
  }

  return (
    <KeyboardAwareScrollView style={styles.keyboard}>
      <View style={styles.view}>
        <Image source={require('../../assets/img/unnamed.png')}
          style={styles.image} />
        <Text>Login Screen</Text>
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
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
    height: "100%",
  },
  keyboard: {
    backgroundColor: '#fff',
  },
})