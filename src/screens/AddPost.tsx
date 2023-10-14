import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Components} from '../components';

const AddPostScreen = () => {
  const [captionText, setCaptionText] = useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Components.Header />
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
});

export default AddPostScreen;
