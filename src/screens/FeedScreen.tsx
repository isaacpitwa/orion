import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const FeedScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text>Feed Screen</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default FeedScreen;
