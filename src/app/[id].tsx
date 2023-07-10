import { Text, View } from "react-native";

function DetailsScreen({ route }: { route: any }) {
  const { id } = route.params; // id 값을 route.params에서 가져옴

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Received ID: {id}</Text> {/* 전달받은 id 값 출력 */}
    </View>
  );
}
