import { Text, View } from "react-native";
import { S } from "./Style";

function Header() {
  return (
    <View style={S.container}>
      <Text style={S.HeaderText}>WIB</Text>
    </View>
  );
}

export default Header;
