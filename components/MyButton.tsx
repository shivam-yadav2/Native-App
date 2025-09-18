import { View, Text } from 'react-native'
import React from 'react'

const MyButton = ({title  }) => {
  return (
    <View style={{flex:1,justifyContent:'center' }}>
      <Text style={{padding:10 , backgroundColor:"yellow" , textAlign:"center" }}>{title}</Text>
    </View>
  )
}

export default MyButton