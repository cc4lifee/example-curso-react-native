import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri: "https://images.nintendolife.com/baf49b85ad309/jp.900x.jpg" }} style={{ width: 215, height: 294}} />
      <Text style={{color: 'white'}}>Tenemos aqui la App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
