import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Common } from '../../components/Common/Style';
import { fetchListItem } from '../../api/api';
import { useMutation, useQuery } from 'react-query';
import { DetailParams, DetailType } from '../../types/Detail';
import { S } from './Style';
import Header from '../../components/Header/Header';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState, useEffect } from 'react';
import { theme } from '../../../color';
import { apiClient } from '../../util/apiClient';

function CreateScreen() {
  const route = useRoute();
  const params = route.params as DetailParams;
  const [isNotFront, setIsNotFront] = useState(false);
  const [title, setTitle] = useState('');
  const [answerText, setAnswerText] = useState('');
  const navigation: any = useNavigation();
  const { data } = useQuery<DetailType>('posts', () =>
    fetchListItem(params.id)
  );
  console.log(isNotFront);

  const ClickSubmitBtn = async () => {
    try {
      await apiClient.post('/questions', {
        question: title,
        answer: answerText,
        tag: isNotFront ? 'BE' : 'FE',
      });
      Alert.alert('글이 생성되었습니다');
      setTitle('');
      setAnswerText('');
      navigation.navigate('Home');
      const addMutation = useMutation((value) => fetch(`questions`));
      addMutation.mutate();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (params?.id) {
      setTitle(data?.question.question ?? '');
      setAnswerText(data?.question.answer ?? '');
    }
  }, []);

  const onChangeText = (payload: string) => setTitle(payload);
  const onChangeAnswerText = (payload: string) => setAnswerText(payload);

  return (
    <View style={Common.container}>
      <Header />
      <TextInput
        value={title}
        style={S.input}
        returnKeyType="done"
        onChangeText={onChangeText}
        placeholder={'질문을 입력해주세요'}
      />
      <SegmentedControl
        style={S.Radio}
        selectedIndex={0}
        tintColor={'white'}
        values={['Front', 'Back']}
        fontStyle={{ fontSize: 20 }}
        backgroundColor={theme.itemColor}
        onChange={() => setIsNotFront((pre) => !pre)}
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={S.textArea}
        returnKeyType="done"
        placeholder="답변을 입력하세요"
        onChangeText={onChangeAnswerText}
      />
      <TouchableOpacity style={S.SubmitBtn} onPress={ClickSubmitBtn}>
        <Text style={S.SubmitBtnText}>생성하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreateScreen;
