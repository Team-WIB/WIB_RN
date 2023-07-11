import { StyleSheet } from "react-native";
import { theme } from "../../../color";

export const S = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: theme.bg,
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderText: {
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
});
