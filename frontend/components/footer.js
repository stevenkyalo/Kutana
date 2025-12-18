import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Kutana. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000",
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Footer;