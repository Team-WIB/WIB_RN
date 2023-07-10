import { StyleSheet } from "react-native";
import { theme } from "../../../color";

export const S = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: theme.bg,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  HeaderText: {
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
});
