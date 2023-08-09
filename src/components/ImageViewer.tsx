import { StyleSheet, Image, View } from "react-native";
import React from "react";
const PlaceHolderImage = require("../../assets/images/background-image.png");
const ImageViewer = ({ source }) => {
  const imageSource = source ? { uri: source } : PlaceHolderImage;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
