import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {Components} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddPostScreen = () => {
  const [captionText, setCaptionText] = useState('');
  const [imageList, setImageList] = useState<any>([]);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [location, setLocation] = useState<any>({});
  const [category, setCategory] = useState<any>({});
  const [imagesSelected, setImagesSelected] = useState<any>([]);

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
          <ScrollView horizontal={true}>
            {imageList.map((image: any) => (
              <Components.ImageInput
                key={image.id}
                setImageSelected={image => {
                  setImagesSelected([...imagesSelected, image]);
                  setImageList([...imageList, {id: imageList.length + 1}]);
                }}
              />
            ))}
          </ScrollView>
        </View>
        <Components.CategoryModal
          modalVisible={categoryModalVisible}
          setModalVisible={setCategoryModalVisible}
          setCategory={setCategory}
        />
        <Components.LocationModal
          modalVisible={locationModalVisible}
          setModalVisible={setLocationModalVisible}
          setLocation={setLocation}
        />
        <View style={styles.selectionList}>
          {location.label && (
            <View style={styles.selectionBtn}>
              <Ionicons name="location" size={16} />
              <Text style={styles.selectionText}>{location.label}</Text>
              <Ionicons name="close" size={18} />
            </View>
          )}
          {category.name && (
            <View style={styles.selectionBtn}>
              <MaterialIcons name="numbers" size={16} />
              <Text style={styles.selectionText}>{category.name}</Text>
              <Ionicons name="close" size={18} />
            </View>
          )}
        </View>
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
  selectionList: {
    padding: 20,
  },
  selectionText: {
    color: '#7E7D7E',
    fontSize: 12,
  },
  selectionBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#7E7D7E',
    width: '36%',
    gap: 4,
    borderRadius: 20,
    marginTop: 8,
  },
});

export default AddPostScreen;
