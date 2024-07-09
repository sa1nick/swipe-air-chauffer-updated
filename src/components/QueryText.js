import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import CommonStyle from "../commonStyle/CommonStyle";
import SAD from "../SAD";

function QueryText({ query }) {
  return <Text style={styles.query}>{query}</Text>;
}

const styles = StyleSheet.create({
  query: {
    fontSize: 16,
    fontFamily: "Rubik-Medium",
    color: SAD.colors.white,
    marginTop: 40,
    marginLeft: 16,
  },
});
export default QueryText;
