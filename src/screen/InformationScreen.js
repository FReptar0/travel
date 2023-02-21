import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InformationScreen(props) {
  console.log(props)
  const { navigation } = props
  return (
    <View>
      <Text>Information Screen</Text>
      <Button title="Go to Index" onPress={() => navigation.navigate("Index")} />
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </View>
  )
}

const styles = StyleSheet.create({

})