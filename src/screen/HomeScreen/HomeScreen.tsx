import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header/Header';
import { Common } from '../../components/Common/Style';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';
import { S } from './Style';
import { theme } from '../../../color';
import { useQuery } from 'react-query';
import { fetchList } from '../../api/api';
import { ListType } from '../../types/List';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import BottomTabNavigationApp from '../../components/Tabs/Tabs';

type RootStackParamList = {
  Detail: {
    id: number;
  };
  // 다른 화면들도 추가해줄 수 있습니다.
};

type DetailsScreenNavigationProp = NavigationProp<RootStackParamList>;

function HomeScreen() {
  const [isFront, setIsFront] = useState(false);
  const { data: ListData } = useQuery<ListType>('posts', fetchList);
  const navigation: DetailsScreenNavigationProp = useNavigation();

  return (
    <View style={Common.container}>
      <StatusBar style="dark" backgroundColor={'black'} />
      <Header />
      <SegmentedControl
        values={['Front', 'Back']}
        selectedIndex={0}
        onChange={() => setIsFront((pre) => !pre)}
        fontStyle={{ fontSize: 20 }}
        style={S.Radio}
        tintColor={'white'}
        backgroundColor={theme.itemColor}
      />
      <ScrollView style={S.List}>
        {ListData?.questions &&
          ListData?.questions.map(
            (i) =>
              isFront === (i.tag !== 'FE') && (
                <>
                  <TouchableOpacity
                    style={S.ListItem}
                    key={i.id}
                    onPress={() => navigation.navigate('Detail', { id: i.id })}
                  >
                    <Text style={S.ItemText}>{i.question}</Text>
                  </TouchableOpacity>
                </>
              )
          )}
      </ScrollView>
      {/* <BottomTabNavigationApp /> */}
    </View>
  );
}

export default HomeScreen;
