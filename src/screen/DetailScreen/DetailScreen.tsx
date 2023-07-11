import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Common } from "../../components/Common/Style";
import { fetchListItem } from "../../api/api";
import { useQuery } from "react-query";
import { DetailParams, DetailType } from "../../types/Detail";
import DetailHeader from "../../components/DetailHeader/DetailHeader";

function DetailScreen() {
  const route = useRoute();
  const params = route.params as DetailParams;
  const { navigate, goBack } = useNavigation();
  const { data: DetailData } = useQuery<DetailType>("posts", () =>
    fetchListItem(params.id)
  );

  console.log(DetailData);

  return (
    <View style={Common.container}>
      <StatusBar style="dark" backgroundColor="black" />
      <DetailHeader />
    </View>
  );
}

export default DetailScreen;
