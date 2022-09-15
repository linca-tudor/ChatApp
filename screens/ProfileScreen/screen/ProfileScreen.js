import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/Button';
import Image from '../../../components/Image'
import getStyles from './ProfileScreen.styles';

const ProfileScreen = ({ onSignOutPress, uid, name, email, photoURL }) => {
  const styles = getStyles();

  console.log(photoURL);
  return (
    <View style={[styles.flex, styles.container]}>
      <Image source={{ uri: photoURL }} style={styles.image} /> 
      <Text>Welcome {name}!</Text>
      <Button title="Sign Out" style={styles.button} onPress={onSignOutPress} />
    </View>
  );
};

export default ProfileScreen;
