import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to components demo"
      />
      <TouchableOpacity onPress={() => console.log("List pressed")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
