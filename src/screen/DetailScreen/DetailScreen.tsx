import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Common } from '../../components/Common/Style';
import { fetchListItem } from '../../api/api';
import { useQuery } from 'react-query';
import { DetailParams, DetailType } from '../../types/Detail';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import { S } from './Style';

function DetailScreen() {
  const route = useRoute();
  const params = route.params as DetailParams;
  const { data } = useQuery<DetailType>('posts', () =>
    fetchListItem(params.id)
  );

  const DetailData = data?.question;

  return (
    <View style={Common.container}>
      <DetailHeader />
      <View style={S.topContant}>
        <Text style={S.tag}>{DetailData?.tag}</Text>
        <Text style={S.question}>{DetailData?.question}</Text>
      </View>
      <View style={S.answerView}>
        <Text style={S.answer}>{DetailData?.answer}</Text>
      </View>
    </View>
  );
}

export default DetailScreen;
