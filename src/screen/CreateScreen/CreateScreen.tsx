import { Text, View, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Common } from '../../components/Common/Style';
import { fetchListItem } from '../../api/api';
import { useQuery } from 'react-query';
import { DetailParams, DetailType } from '../../types/Detail';
import { S } from './Style';
import Header from '../../components/Header/Header';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';
import { theme } from '../../../color';

function CreateScreen() {
  const route = useRoute();
  const params = route.params as DetailParams;
  const [isFront, setIsFront] = useState(false);
  const [title, setTitle] = useState('');
  const { navigate, goBack } = useNavigation();
  const { data } = useQuery<DetailType>('posts', () =>
    fetchListItem(params.id)
  );

  const onChangeText = (payload: string) => setTitle(payload);

  return (
    <View style={Common.container}>
      <Header />
      <TextInput
        onChangeText={onChangeText}
        returnKeyType="done"
        value={title}
        placeholder={'질문을 입력해주세요'}
        style={S.input}
      />
      <SegmentedControl
        values={['Front', 'Back']}
        selectedIndex={0}
        onChange={() => setIsFront((pre) => !pre)}
        fontStyle={{ fontSize: 20 }}
        style={S.Radio}
        tintColor={'white'}
        backgroundColor={theme.itemColor}
      />
      <TextInput
        style={S.textArea}
        multiline={true}
        numberOfLines={4}
        placeholder="답변을 입력하세요..."
      />
      <Text>생성페이지</Text>
    </View>
  );
}

export default CreateScreen;
