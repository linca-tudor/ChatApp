import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import getStyles from './ProfileScreen.styles';

// TODO: remove onPressTemporary; currently placeholder to edit profile
const ProfileScreen = ({
  onSignOutPress,
  onPressTemporary,
  uid,
  name,
  email,
  photoURL,
}) => {
  const styles = getStyles();

  return (
    <View style={[styles.flex, styles.container]}>
      <TouchableOpacity onPress={onPressTemporary}>
        <Image source={{ uri: photoURL }} style={styles.image} />
        <Text>Welcome {name}!</Text>
      </TouchableOpacity>
      <Button title="Sign Out" style={styles.button} onPress={onSignOutPress} />
    </View>
  );
};

export default ProfileScreen;
