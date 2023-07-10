import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import HomeScreen from "./src/screen/HomeScreen/HomeScreen";
import DetailScreen from "./src/screen/DetailScreen/DetailScreen";
import { Ionicons, Feather } from "@expo/vector-icons";

const Tab = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => {
          return { headerShown: false };
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Settings" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
