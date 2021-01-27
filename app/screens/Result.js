import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";

import questionList from "../data/questions";
import shortAns from "../data/shortAnswers";
import config from "../config";
import userDetails from "../data/user";

function Result({ navigation }) {
  console.log(questionList.map((q) => q.response));
  console.log(shortAns[0]);
  function onClick({ navigation }) {
    {
      questionList.map((q) => (q.response.length = 0));
    }
    {
      shortAns.length = 0;
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.title}>{"Hi " + userDetails.firstName + "!"}</Text>
        {questionList[1].response.length === 0 &&
        questionList[0].response.length === 0 &&
        !shortAns[0] ? (
          <Text style={styles.title}>You did not answer any questions.</Text>
        ) : (
          <Text style={styles.title}>
            After evaluation of your answers, we have concluded:
          </Text>
        )}

        {questionList[1].response.length > 0 && (
          <Text style={styles.title}>
            Aspects that you dislike are{"\n"}
            {questionList[1].response.map((r) => "- " + r + "\n")}{" "}
          </Text>
        )}

        {questionList[0].response.length > 0 && (
          <Text style={styles.title}>
            Aspects that you value are{"\n"}
            {questionList[0].response.map((r) => "- " + r + "\n")}{" "}
          </Text>
        )}
        {shortAns[0] && (
          <Text style={styles.title}>
            Thinking about what you value in yourself gives you strength through
            difficult times.{"\n"} Remember - {"\n"}
            {shortAns[0]}
          </Text>
        )}
      </View>

      <TouchableOpacity
        onPress={() => onClick({ navigation })}
        style={{ alignItems: "center", paddingBottom: 50 }}
      >
        <View style={styles.submitButton}>
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(56, 173, 169, 0.3)",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  submitButton: {
    borderRadius: 48,
    borderColor: config.secondaryColor,
    borderWidth: 4,
    height: 70,
    justifyContent: "center",
    width: 150,
    marginTop: 30,
    alignItems: "center",
  },
  summary: {
    alignItems: "flex-start",
    marginHorizontal: 10,
  },
  text: {
    color: config.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    color: config.textColor,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
});
export default Result;
