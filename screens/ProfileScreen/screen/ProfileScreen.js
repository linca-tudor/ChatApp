import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/Button';
import getStyles from './ProfileScreen.styles';

const ProfileScreen = ({ onSignOutPress, uid, name, email, photoURl }) => {
  const styles = getStyles();
  return (
    <View style={[styles.flex, styles.container]}>
      <Text>Welcome {name}!</Text>
      <Button title="Sign Out" style={styles.button} onPress={onSignOutPress} />
    </View>
  );
};

export default ProfileScreen;
