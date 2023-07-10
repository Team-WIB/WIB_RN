import { StyleSheet } from "react-native";
import { theme } from "../../../color";

export const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Radio: {
    paddingVertical: 23,
  },
  List: {
    paddingVertical: 10,
    height: 300,
    flexDirection: "column",
    gap: 15,
  },
  ListItem: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: theme.itemColor,
  },
  ItemText: {
    fontSize: 20,
    color: "white",
  },
});
