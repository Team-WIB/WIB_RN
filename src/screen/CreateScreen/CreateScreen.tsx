import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Common } from '../../components/Common/Style';
import { fetchListItem } from '../../api/api';
import { useQuery } from 'react-query';
import { DetailParams, DetailType } from '../../types/Detail';
import { S } from './Style';

function CreateScreen() {
  const route = useRoute();
  const params = route.params as DetailParams;
  const { navigate, goBack } = useNavigation();
  const { data } = useQuery<DetailType>('posts', () =>
    fetchListItem(params.id)
  );

  const DetailData = data?.question;
  console.log(DetailData);

  return (
    <View style={Common.container}>
      <Text>생성페이지</Text>
    </View>
  );
}

export default CreateScreen;
