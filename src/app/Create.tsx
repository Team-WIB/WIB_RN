import { View } from 'react-native';
import CreateScreen from '../screen/CreateScreen/CreateScreen';

export default function Create() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CreateScreen />
    </View>
  );
}
