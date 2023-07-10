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
import { S } from "./Style";

function Header() {
  return (
    <View style={S.container}>
      <Text style={S.HeaderText}>WIB</Text>
    </View>
  );
}

export default Header;
