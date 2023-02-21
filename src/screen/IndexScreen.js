import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Index(props) {
  console.log(props)
  const { navigation } = props
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
      <Button title="Go to Information" onPress={() => navigation.navigate("Information")} />
      <Button title="Go to Login" onPress={() => navigation.navigate("LoginS",{screen: "LoginS"})} />
    </View>
  )
}

const styles = StyleSheet.create({

})