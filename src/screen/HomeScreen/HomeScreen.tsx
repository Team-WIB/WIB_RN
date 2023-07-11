import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
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

type RootStackParamList = {
  Detail: {
    id: number;
  };
};

type DetailsScreenNavigationProp = NavigationProp<RootStackParamList>;

function HomeScreen() {
  const [isBack, setIsBack] = useState(false);
  const { data: ListData } = useQuery<ListType>('posts', fetchList);
  const navigation: DetailsScreenNavigationProp = useNavigation();

  return (
    <View style={Common.container}>
      <Header />
      <SegmentedControl
        values={['Front', 'Back']}
        selectedIndex={0}
        onChange={() => setIsBack((pre) => !pre)}
        fontStyle={{ fontSize: 20 }}
        style={S.Radio}
        tintColor={'white'}
        backgroundColor={theme.itemColor}
      />
      <ScrollView style={S.List}>
        {ListData?.questions &&
          ListData?.questions.map(
            (i) =>
              isBack === (i.tag !== 'FE') && (
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
    </View>
  );
}

export default HomeScreen;
