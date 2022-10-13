import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import ListItem from '../../../components/ListItem';
import Strings from './../../../assets/Strings';
import getStyles from './ProfileScreen.styles';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
} from '@expo/vector-icons';
import Colors from '../../../assets/Colors';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Linking } from 'react-native';

const ProfileScreen = ({
  onSignOutPress,
  onProfileEditPress,
  onDrawerButtonPress,
  uid,
  name,
  email,
  photoURL,
  drawerState,
}) => {
  const styles = getStyles();
  const imageSource = photoURL
    ? { uri: photoURL }
    : require('../../../assets/images/userPhotoPlaceholder.jpeg');

  return (
    <View style={[styles.flex, styles.container]}>
      <SafeAreaView style={styles.drawerButton}>
        {!drawerState && (
          <Animated.View
            entering={FadeIn.duration(100)}
            exiting={FadeOut.duration(100)}
          >
            <TouchableOpacity onPress={onDrawerButtonPress}>
              <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>
          </Animated.View>
        )}
      </SafeAreaView>
      <TouchableOpacity onPress={onProfileEditPress}>
        <View style={[styles.imageContainer]}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.frame} />
          <View style={styles.editIconContainer}>
            <MaterialCommunityIcons
              name="pencil"
              size={32.5}
              color={Colors.watermelon}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.listContainer}>
        <ListItem
          icon={<Feather name="phone-call" size={23} color={Colors.darkGrey} />}
          text={Strings.profileScreen.contact}
          onPress={() => {
            Linking.openURL('mailto:mail.tudorlinca@gmail.com');
          }}
        />
        <ListItem
          icon={
            <AntDesign name="codesquare" size={23} color={Colors.darkGrey} />
          }
          text={Strings.profileScreen.sourceCode}
          onPress={() => {
            Linking.openURL('https://github.com/linca-tudor/ChatApp.git');
          }}
        />
        <ListItem
          icon={
            <MaterialIcons
              name="privacy-tip"
              size={23}
              color={Colors.darkGrey}
            />
          }
          text={Strings.profileScreen.copyright}
        />
      </View>
      <Button title="Sign Out" style={styles.button} onPress={onSignOutPress} />
    </View>
  );
};

export default ProfileScreen;
