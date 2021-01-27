// Third Party Imports
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

//Local Imports
import config from "../config";
import Option from "../components/Option";
import questionList from "../data/questions";
import Question from "../components/Question";
import { useState } from "react";
import { useEffect } from "react";
import shortAnswers from "../data/shortAnswers";

export default function Quiz({ navigation }) {
  //Stores the answer written for the short ans question
  const [shortAns, setShortAns] = useState(null);
  //Stores the option selected from the dropdown list
  const [selectedOption, setSelectedOption] = useState(null);

  //Navigates to the Result Screen on submission of the test
  function onSubmit({ navigation }) {
    shortAnswers.push(shortAns);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Result" }],
      })
    );
  }

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Question
          description="What do you like most about yourself?"
          id={questionList.length}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your answer"
          textAlign="center"
          onChangeText={(text) => setShortAns(text)}
          value={shortAns}
        />
        {questionList.map((q) => (
          <View
            key={q.questionID}
            style={{
              flex: 1,
            }}
          >
            <Question
              description={q.question}
              id={q.questionID}
              key={q.questionID}
            />
            {q.options
              ? q.options.map((option, index) => (
                  <Option
                    description={option}
                    questionID={q.questionID}
                    key={index}
                  />
                ))
              : null}
          </View>
        ))}
        <TouchableOpacity
          onPress={() => onSubmit({ navigation })}
          style={{ alignItems: "center", paddingBottom: 50 }}
        >
          <View style={styles.submitButton}>
            <Text style={styles.text}>Submit Test</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  inputText: {
    height: 50,
    fontSize: 18,
    color: config.textColor,
    fontWeight: "500",
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
  text: {
    color: config.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
  },
});
