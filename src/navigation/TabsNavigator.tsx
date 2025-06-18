import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NotesStack } from "./NotesStack";
import { Ionicons } from "@expo/vector-icons";
import { ArchiveStack } from "./ArchiveStack";
import { ltuBlue, ltuRed, ltuRose } from "../constants/colors";
import { LogoutScreen } from "../views/LogoutScreen";

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      id="Notes"
      initialRouteName="Notizen"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: ltuBlue,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: ltuRose,
          borderTopWidth: 0,
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Notizen"
        component={NotesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"document-text"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Archiv"
        component={ArchiveStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"archive"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen as any}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"log-out"} size={size} color={ltuRed} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: ltuRed, fontSize: 10 }}>Logout</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
