import { Auth } from "aws-amplify";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import { ltuRoseShade } from "../constants/colors";
import { LtuText } from "../components/typography/Text";
import AppContext from "../context/AppContext";

export const LogoutScreen = () => {
  const appContext = useContext(AppContext);
  useEffect(() => {
    const logout = async () => {
      try {
        await Auth.signOut();
        appContext.setIsLoggedIn(false);
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    logout();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ltuRoseShade,
      }}
    >
      <LtuText>Logging out...</LtuText>
    </View>
  );
};
