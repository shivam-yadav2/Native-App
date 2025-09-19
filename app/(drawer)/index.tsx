import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
const index = () => {
  return (
    <>
      <View>
        <Popup />
      </View>
    </>
  );
};

export default index;

const Popup = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <View className="flex-1 items-center justify-center bg-red-400">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <Modal isVisible={visible} onBackButtonPress={() => setVisible(false)} onBackdropPress={() => setVisible(false)}>
        <View style={{  height:100, backgroundColor:'white' , justifyContent:'center' , alignItems:'center' }}>
          <Text>I am the modal content!</Text>
          <Button title="Hide modal" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};
