import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import LoginScreen from './LoginScreen'
import Loading from '../components/common/Loading'


export default function Index(props) {
  const { navigation } = props
  const [sesion, setSesion] = useState(null)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setSesion(user ? true : false)
    })
  }, [])

  if (sesion === null) {
    return <Loading isVisible={true} text={"Validando sesion"} />
  }

  return sesion ? (
    <View>
      <Text>Index Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
      <Button title="Go to Information" onPress={() => navigation.navigate("Information")} />
      <Button title="Go to Login" onPress={() => navigation.navigate("LoginS", { screen: "LoginS" })} />
    </View>
  ) : (<LoginScreen />)
}
