import { StyleSheet } from 'react-native';
import { theme } from '../../../color';

export const S = StyleSheet.create({
  topContant: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingBottom: 20,
  },
  question: {
    fontSize: 40,
    color: 'white',
    fontWeight: '600',
  },
  tag: {
    fontSize: 20,
    color: 'white',
  },
  answerView: {
    flex: 5.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.itemColor,
  },
  answer: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
  },
});
