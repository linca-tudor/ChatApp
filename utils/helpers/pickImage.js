import React, { useState } from 'react';
import * as ExpoImagePicker from 'expo-image-picker';
import fileUpload from './fileUpload';
import getBlobFromUri from './getBlobFromURI';

const handleFileUpload = async (
  imageURI,
  path,
  { onStart, onProgress, onComplete, onFail }
) => {
  const blob = await getBlobFromUri(imageURI);

  fileUpload(blob, { onStart, onProgress, onComplete, onFail }, path, imageURI);
};

export const pickGalleryImage = async (
  { onStart, onProgress, onComplete, onFail },
  path
) => {
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
    selectionLimit: 1,
  });

  if (!result.cancelled) {
    handleFileUpload(result.uri, path, {
      onStart,
      onProgress,
      onComplete,
      onFail,
    });
  }
};

export const pickCameraImage = async (
  { onStart, onProgress, onComplete, onFail },
  path
) => {
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
    selectionLimit: 1,
  });

  if (!result.cancelled) {
    handleFileUpload(result.uri, path, {
      onStart,
      onProgress,
      onComplete,
      onFail,
    });
  }
};
