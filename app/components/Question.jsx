import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

function Question(props) {
  return (
    <View style={styles.questionBox}>
      <Text style={styles.questionText} adjustsFontSizeToFit={true}>
        Q{props.id}. {props.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    width: "100%",
    height: 100,
    backgroundColor: "#079992",
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#353b48",
    width: 350,
    textAlign: "center",
  },
});
export default Question;
