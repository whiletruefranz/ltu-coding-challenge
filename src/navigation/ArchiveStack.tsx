import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotesListScreen } from "../views/NotesListScreen";
import { ltuBlue, ltuRose } from "../constants/colors";

const Stack = createNativeStackNavigator();

export const ArchiveStack = () => {
  return (
    <Stack.Navigator
      id="ArchiveStack"
      initialRouteName="Archivierte Notizen"
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
      <Stack.Screen name="Archivierte Notizen" component={NotesListScreen} />
    </Stack.Navigator>
  );
};
