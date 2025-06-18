import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { Auth } from "@aws-amplify/auth";
import { LtuInput } from "../components/Input";
import { ltuRoseShade } from "../constants/colors";
import { LtuButton } from "../components/Button";

export const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      // If user needs to set a new password, automatically handle it
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        const completedUser = await Auth.completeNewPassword(user, password);
        console.log("✅ New password set. User is authenticated");
      }
      onLoginSuccess();
    } catch (error) {
      Alert.alert("Fehler beim Login", error.message || "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LtuInput
        placeholder="E-Mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <LtuInput
        placeholder="Passwort"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LtuButton onPress={handleLogin} isLoading={loading}>
        Login
      </LtuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: ltuRoseShade,
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
});
