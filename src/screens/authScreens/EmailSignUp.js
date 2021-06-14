import React from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";

import { PlainInput } from "../../components/InputField";

const { height, width } = Dimensions.get("window");

class EmailSignUp extends React.Component {
  static navigationOptions = {
    title: "Email Address"
  };

  render() {
    return (
      <View style={styles.container}>
        <PlainInput placeholder="Enter your Email id" />
        <TouchableOpacity style={[styles.inputWrapper, styles.btnContainer]}>
          <Text style={{ color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  inputWrapper: {
    marginTop: 24
  },
  btnContainer: {
    height: 50,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 12,
    alignSelf: "center",
    backgroundColor: "#0084ff"
  }
});

export default EmailSignUp;
