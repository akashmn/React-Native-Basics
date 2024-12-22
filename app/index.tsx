import { useState } from "react";
import { Button, Image, ImageBackground, Modal, Pressable, ScrollView, Text, View, Alert, ActivityIndicator, StyleSheet } from "react-native";

// importing custom components
import Greet from "@/components/Greet";

// importing images
const bgImage = require("@/assets/images/adaptive-icon.png");

export default function Index() {

  const [modalVisible, setModalVisible] = useState(false); // state for modal visibility

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imageBackground}>
        <Greet name="Akash" />
        <View style={[styles.box, styles.boxShadow, styles.androidShadow]}>
          <ScrollView>
            <Text>
              <Text style={styles.helloText}>Hello</Text> , world!
            </Text>
            <Pressable onLongPress={() => alert("Long press on image")}>
              <Image source={{uri: "https://picsum.photos/300"}} style={styles.image} />
            </Pressable>

            <Text style={styles.loremText}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </ScrollView>
          <Button title="Click me" onPress={() => setModalVisible(true)} />
        </View>
        
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBox}>
            <Text>
              <Text style={styles.goodbyeText}>Goodbye</Text> , world!
            </Text>
            <Image source={{uri: "https://picsum.photos/400"}} style={styles.image} />

            <Button title="Alert 1" onPress={() => Alert.alert("Alert 1")} />
            <Button title="Alert 2" onPress={() => Alert.alert("Invalid Data", "DOB Incorrect!")} />
            <Button title="Alert 3" onPress={() => Alert.alert("Invalid Data", "DOB Incorrect!", [
              {text: "OK", onPress: () => console.log("OK Pressed")},
              {text: "Cancel", onPress: () => console.log("Cancel Pressed")},
            ])} />

          </View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <ActivityIndicator size="large" color="midnightblue" animating={true} />
        </Modal>
      </ImageBackground>
    </View>
  );
}

// styles for the components (StyleSheet method)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  box: {
    backgroundColor: "lightblue",
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    padding: 20,
    borderWidth: 4,
    borderRadius: 20,
  },
  helloText: {
    color: "white",
    fontSize: 20,
  },
  loremText: {
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  modalBox: {
    backgroundColor: "lightgreen",
    width: 300,
    height: 500,
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  goodbyeText: {
    color: "white",
    fontSize: 20,
  },

  boxShadow:{
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },

  androidShadow: {
    elevation: 5,
  }
});