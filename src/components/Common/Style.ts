import { StyleSheet, Platform } from "react-native";
import { theme } from "../../../color";
import Constants from "expo-constants";

export const Common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
  },
});
