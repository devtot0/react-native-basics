import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export const ListScreen = () => {
  const friends = [
    { name: "Friend1", age: 12 },
    { name: "Friend2", age: 76 },
    { name: "Friend3", age: 27 },
    { name: "Friend4", age: 51 },
    { name: "Friend5", age: 7 },
    { name: "Friend6", age: 34 },
    { name: "Friend7", age: 21 },
    { name: "Friend8", age: 42 },
  ];

  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={true}
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    >
      ListScreen
    </FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 1,
    padding: 40,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default ListScreen;
