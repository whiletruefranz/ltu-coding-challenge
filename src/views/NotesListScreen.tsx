import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { ltuRoseShade } from "../constants/colors";
import { LtuSpinner } from "../components/Spinner";

export function NotesListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <LtuSpinner />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: ltuRoseShade,
    justifyContent: "center",
    alignItems: "center",
  },
});
