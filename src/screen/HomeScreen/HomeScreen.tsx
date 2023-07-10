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
import { useQuery } from "react-query";
import { fetchList } from "../../api/api";
import { ListType } from "../../types/List";

function HomeScreen() {
  const [isFront, setIsFront] = useState(false);
  const { data: ListData } = useQuery<ListType>("posts", fetchList);

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
      <ScrollView style={S.List}>
        {ListData?.questions.map(
          (i) =>
            isFront === (i.tag === "FE") && (
              <>
                <View style={S.ListItem} key={i.id}>
                  <Text style={S.ItemText}>{i.question}</Text>
                </View>
              </>
            )
        )}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
