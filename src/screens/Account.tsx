import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AccountScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text>Account Screen</Text>
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

export default AccountScreen;
