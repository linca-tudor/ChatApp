import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    chatContaner: {
      backgroundColor: 'white',
    },
    messageDateContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.titanWhite,
      paddingHorizontal: 7.5,
      paddingVertical: 3,
      borderRadius: 15,
      shadowColor: Colors.black,
      shadowOpacity: 0.075,
      shadowOffset: {
        height: 1,
      },
    },
  });
};

export default getStyles;
