import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { S } from "./Style";
import { DetailParams } from "../../types/Detail";

function DetailHeader() {
  const route = useRoute();
  const params = route.params as DetailParams;

  return (
    <View style={S.container}>
      <Text style={S.HeaderText}>WIB</Text>
    </View>
  );
}

export default DetailHeader;
