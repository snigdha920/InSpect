import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

import config from "../config";
import userDetails from "../data/user";

function Home({ navigation }) {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  function validateEmail(email) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    Alert.alert(
      "Invalid Email Address",
      "You have entered an invalid email address",
      [
        {
          text: "Okay",
        },
      ],
      { cancelable: false }
    );
    return false;
  }

  function validateName(name) {
    let letters = /^[A-Za-z]+$/;
    if (letters.test(name)) {
      return true;
    } else {
      Alert.alert(
        "Invalid Name",
        "You have entered an invalid name",
        [
          {
            text: "Okay",
          },
        ],
        { cancelable: false }
      );
      return false;
    }
  }

  function validateAge(age) {
    let numbers = /^[1-9]?[0-9]{1}$|^100$/;
    if (numbers.test(age)) {
      return true;
    } else {
      Alert.alert(
        "Invalid Age",
        "You have entered an invalid age",
        [
          {
            text: "Okay",
          },
        ],
        { cancelable: false }
      );
    }
  }

  function onSubmit({ navigation }) {
    if (email === null || age === null || name === null) {
      Alert.alert(
        "Missing Values",
        "Please fill in all the specified fields",
        [
          {
            text: "Okay",
          },
        ],
        { cancelable: false }
      );
      return;
    }
    if (validateEmail(email)) {
      if (validateName(name)) {
        if (validateAge(parseInt(age))) {
          userDetails.age = parseInt(age);
          userDetails.firstName = name;
          userDetails.email = email;
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Quiz" }],
            })
          );
        }
      }
    }
    setName(null);
    setEmail(null);
    setAge(null);
  }

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faAsterisk} size={55} style={styles.icon} />
      <Text style={styles.descriptionText}>Find Out More About Yourself.</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Your email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Your name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Your age"
        keyboardType="number-pad"
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <TouchableOpacity onPress={() => onSubmit({ navigation })}>
        <View style={styles.submitButton}>
          <Text style={styles.text}>Start Test</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    color: config.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  container: {
    backgroundColor: "rgba(56, 173, 169, 0.3)",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginVertical: 30,
    color: config.secondaryColor,
  },
  inputText: {
    width: "85%",
    height: 70,
    borderColor: config.secondaryColor,
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 4,
    color: "#353b48",
  },
  submitButton: {
    borderRadius: 48,
    borderColor: config.secondaryColor,
    borderWidth: 4,
    height: 70,
    justifyContent: "center",
    width: 150,
    marginTop: 30,
  },
  text: {
    color: config.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Home;
