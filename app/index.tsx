import { useState } from "react";
import { Button, Image, ImageBackground, Modal, Pressable, ScrollView, Text, View } from "react-native";

// importing images
const bgImage = require("@/assets/images/adaptive-icon.png");

export default function Index() {

  const [modalVisible, setModalVisible] = useState(false); // state for modal visibility

  return (
    <View style={{
      backgroundColor: "plum",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <ImageBackground source={bgImage} 
        style={{flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}>

        <View style={{
          backgroundColor: "lightblue",
          width: 200,
          height: 200,
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}>
          <ScrollView>
            <Text>
              <Text style={{color: "white", fontSize: 20}}>Hello</Text> , world!
            </Text>
            <Pressable onLongPress={() => alert("Long press on image")}>
              <Image source={{uri: "https://picsum.photos/300"}} style={{width: 150, height: 150}} />
            </Pressable>

            <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </ScrollView>
          <Button title="Click me" onPress={() => setModalVisible(true)} />
        </View>
        
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <View style={{
            backgroundColor: "lightgreen",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            padding: 20,
          }}>
            <Text>
              <Text style={{color: "white", fontSize: 20}}>Goodbye</Text> , world!
            </Text>
            <Image source={{uri: "https://picsum.photos/400"}} style={{width: 150, height: 150}} />
            
          </View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Modal>
      </ImageBackground>
    </View>
  );
}
