import React from 'react';
import * as ExpoImagePicker from 'expo-image-picker';

export const pickGalleryImage = async (setImageURI) => {
  const permissionResult =
    await ExpoImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert(Strings.onboarding.refusedGalleryPersmission);
    return;
  }

  const result = await ExpoImagePicker.launchImageLibraryAsync({
    mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    allowsMultipleSelection: false,
    aspect: [1, 1],
    quality: 1,
    selectionLimit: 1,
  });

  if (!result.cancelled) {
    setImageURI(result.uri);
  }
};

export const pickCameraImage = async (setImageURI) => {
  const permissionResult =
    await ExpoImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert(Strings.onboarding.refusedCameraPermission);
    return;
  }

  const result = await ExpoImagePicker.launchCameraAsync({
    mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    allowsMultipleSelection: false,
    aspect: [1, 1],
    quality: 1,
    selectionLimit: 1,
  });

  if (!result.cancelled) {
    setImageURI(result.uri);
  }
};
