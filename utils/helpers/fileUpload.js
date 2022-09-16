import React from 'react';
import { storage } from '../../config/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { uuidv4 } from '@firebase/util';

const fileUpload = async (
  fileBlob,
  { onStart, onProgress, onComplete, onFail },
  path,
  localURI
) => {
  storage.maxUploadRetryTime = 3000;

  const storageRef = ref(storage, `images/${path}/${uuidv4()}.jpg`);

  // Create file metadata including the content type
  const metadata = {
    contentType: 'image/jpeg',
  };

  // Trigger file upload start event
  onStart && onStart(localURI);
  const uploadTask = uploadBytesResumable(storageRef, fileBlob, metadata);
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      console.log('Upload progress is: ', progress);

      // Monitor uploading progress
      onProgress && onProgress(Math.fround(progress).toFixed(2));
    },
    (error) => {
      // Something went wrong - dispatch onFail event with error  response
      console.log('Upload from fileUpload.js failer', error);
      onFail && onFail(error);
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        onComplete && onComplete(downloadURL);
      });
    }
  );
};

export default fileUpload;
