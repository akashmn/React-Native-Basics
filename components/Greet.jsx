import { View, Text } from 'react-native'
import React from 'react'

export default function Greet( { name } ) {
  return (
    <View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}> Welcome back, {name} </Text>
    </View>
  )
}