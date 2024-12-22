import { Image, ImageBackground, Text, View } from "react-native";

// importing images
const bgImage = require("@/assets/images/adaptive-icon.png");

export default function Index() {
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
          <Text>
            <Text style={{color: "white", fontSize: 20}}>Hello</Text> , world!
          </Text>
          <Image source={{uri: "https://picsum.photos/300"}} style={{width: 150, height: 150}} />
          
        </View>

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
      </ImageBackground>
    </View>
  );
}
