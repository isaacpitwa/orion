import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IIconButton = {
  icon?: string;
  onPress?: () => void;
};

export default function IconButton({icon = 'list', onPress}: IIconButton) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name={icon} size={28} color={'#484648'} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
});
