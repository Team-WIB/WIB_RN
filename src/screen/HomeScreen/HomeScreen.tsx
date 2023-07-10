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
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header/Header";
import { Common } from "../../components/Common/Style";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useState } from "react";
import { S } from "./Style";
import { theme } from "../../../color";

function HomeScreen() {
  const [isFront, setIsFront] = useState(false);
  return (
    <View style={Common.container}>
      <StatusBar style="dark" backgroundColor={"black"} />
      <Header />
      <SegmentedControl
        values={["Front", "Back"]}
        selectedIndex={0}
        onChange={() => setIsFront((pre) => !pre)}
        fontStyle={{ fontSize: 20 }}
        style={S.Radio}
        tintColor={"white"}
        backgroundColor={theme.itemColor}
      />
      <View style={S.List}>
        <View style={S.ListItem}>
          <Text style={S.ItemText}>react 란 무엇인가요?</Text>
        </View>
        <View style={S.ListItem}>
          <Text style={S.ItemText}>react 란 무엇인가요?</Text>
        </View>
        <View style={S.ListItem}>
          <Text style={S.ItemText}>react 란 무엇인가요?</Text>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
