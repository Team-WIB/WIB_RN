import { StyleSheet } from 'react-native';
import { theme } from '../../../color';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  Radio: {
    paddingVertical: 23,
    marginVertical: 10,
  },
  List: {
    flex: 8,
    paddingVertical: 10,
    height: 300,
    flexDirection: 'column',
  },
  ListItem: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 7,

    borderRadius: 5,
    backgroundColor: theme.itemColor,
  },
  ItemText: {
    fontSize: 20,
    color: 'white',
  },
});
