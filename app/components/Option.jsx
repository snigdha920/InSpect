import React, { useEffect } from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import HorizontalRule from "./HorizontalRule";
import questionList from "../data/questions";

function Option(props) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (selected) {
      questionList[props.questionID - 1].response.push(props.description);
      console.log(
        "on select " + questionList[props.questionID - 1].response.length
      );
    } else {
      questionList[props.questionID - 1].response = questionList[
        props.questionID - 1
      ].response.filter(function (e) {
        return e !== props.description;
      });
      console.log(
        "on deselect " + questionList[props.questionID - 1].response.length
      );
    }
  }, [selected]);
  return (
    <View
      style={{
        backgroundColor: selected ? "rgba(56, 173, 169, 0.5)" : null,
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <View style={styles.option}>
          <Text style={styles.optionDescription}>
            {selected ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                size={20}
                style={{ marginLeft: 20, color: config.secondaryColor }}
              />
            ) : null}
            {props.description}{" "}
          </Text>
        </View>
      </TouchableOpacity>
      <HorizontalRule />
    </View>
  );
}

export default Option;

const styles = StyleSheet.create({
  option: {
    width: 350,
    height: 60,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  optionDescription: {
    fontSize: 18,
    fontWeight: "500",
    color: "#353b48",
  },
});
