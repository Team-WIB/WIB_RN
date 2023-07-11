import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { S } from "./Style";
import { AntDesign } from "@expo/vector-icons";

function DetailHeader() {
  const { goBack } = useNavigation();

  return (
    <View style={S.container}>
      <TouchableOpacity style={S.backText} onPress={goBack}>
        <AntDesign name="left" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default DetailHeader;
