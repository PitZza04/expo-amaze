import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./src/components/ImageViewer";
import Button from "./src/components/Button";
import { useState } from "react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("you did not select any image");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={selectedImage} />
      </View>
      <View style={styles.footer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" onPress={() => {}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  text: {
    color: "#fff",
  },
  footer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
