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
  Radio: {
    paddingVertical: 23,
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    fontSize: 18,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 150,
    textAlignVertical: 'top',
  },
});
