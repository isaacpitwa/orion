import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Components} from '../components';

const AddPostScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Components.Header />
        <Text>Add Post Screen</Text>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    height: '100%',
  },
});

export default AddPostScreen;
