import React from 'react';
import { Modal, TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import getStyles from './MediaUploadModal.style';
import Colors from '../../assets/Colors';

const MediaUploadModal = ({
  isModalVisible,
  setIsModalVisible,
  onCameraPress,
  onGalleryPress,
}) => {
  const styles = getStyles();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={[styles.button, styles.button]}
            onPress={onCameraPress}
          >
            <MaterialCommunityIcons
              name="camera"
              size={24}
              color={Colors.white}
              style={styles.iconStyle}
            />
            <Text style={styles.textStyle}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.button]}
            onPress={onGalleryPress}
          >
            <AntDesign
              name="upload"
              size={24}
              color={Colors.white}
              style={styles.iconStyle}
            />
            <Text style={styles.textStyle}>Upload a photo</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MediaUploadModal;
