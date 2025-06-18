import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotesListScreen } from "../views/NotesListScreen";
import { ltuBlue, ltuRose } from "../constants/colors";

const Stack = createNativeStackNavigator();

export const NotesStack = () => {
  return (
    <Stack.Navigator
      id="NotesStack"
      initialRouteName="Notizen Übersicht"
      screenOptions={{
        headerStyle: {
          backgroundColor: ltuRose,
        },
        headerTintColor: ltuBlue,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Notizen Übersicht" component={NotesListScreen} />
    </Stack.Navigator>
  );
};
