import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Components} from '../components';

const AddPostScreen = () => {
  const [captionText, setCaptionText] = useState('');
  const [imageList, setImageList] = useState<any>([]);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Components.Header
          onAddImage={() => {
            setImageList([...imageList, {id: imageList.length + 1}]);
          }}
          onSelectFeedCategory={() => setCategoryModalVisible(true)}
          onSelectLocation={() => setLocationModalVisible(true)}
        />
        <View style={styles.pageContent}>
          <TextInput
            style={styles.captionInput}
            maxLength={50}
            placeholder="Type here..."
            placeholderTextColor={'#D8D8D8'}
            onChangeText={value => setCaptionText(value.trim())}
          />
          <Text style={styles.captionLength}>{captionText.length}/50</Text>
        </View>
        <View style={styles.ImageList}>
          {imageList.map((item: any) => (
            <Components.ImageInput key={item.id} />
          ))}
        </View>
        <Components.CategoryModal
          modalVisible={categoryModalVisible}
          setModalVisible={setCategoryModalVisible}
        />
        <Components.LocationModal
          modalVisible={locationModalVisible}
          setModalVisible={setLocationModalVisible}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    height: '100%',
  },
  captionInput: {},
  pageContent: {
    padding: 20,
  },
  captionLength: {
    color: '#000',
    textAlign: 'right',
    marginTop: 10,
  },
  ImageList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
});

export default AddPostScreen;
