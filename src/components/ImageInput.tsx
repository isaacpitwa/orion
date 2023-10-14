import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useToast} from 'react-native-toast-notifications';
function ImageInput() {
  const [filePath, setFilePath] = useState<ImagePickerResponse>({});
  const toast = useToast();

  const onChooseImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        // selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          toast.show('User cancelled image picker');
        } else if (response.errorMessage) {
          toast.show(response.errorMessage);
        } else {
          let source = response;
          setFilePath(source);
        }
      },
    );
  };
  return (
    <View>
      {!filePath.assets?.length && (
        <TouchableOpacity style={styles.container} onPress={onChooseImage}>
          <IonicIcon name="camera" size={40} color="black" />
        </TouchableOpacity>
      )}
      {filePath.assets?.length && (
        <Image
          style={styles.container}
          source={{uri: filePath.assets[0].uri}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default ImageInput;
