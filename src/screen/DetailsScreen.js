import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Details(props) {
  console.log(props)
  const { navigation } = props
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go to Index" onPress={() => navigation.navigate("Index")} />
      <Button title="Go to Information" onPress={() => navigation.navigate("Information")} />
    </View>
  )
}

const styles = StyleSheet.create({

})