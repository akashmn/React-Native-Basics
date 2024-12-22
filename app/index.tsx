import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      backgroundColor: "plum",
      flex: 1,
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
        
      </View>

    </View>
  );
}
