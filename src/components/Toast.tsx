import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';

type IToastProps = {
  toast: ToastProps;
};

const Toast = ({toast}: IToastProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{toast.message}</Text>
      <Pressable onPress={() => {}}>
        <Text style={styles.dismissBtn}>Dismiss</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#252327',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '96%',
    gap: 10,
    marginHorizontal: 28,
  },
  message: {
    color: '#fff',
  },
  dismissBtn: {
    color: '#7D788C',
  },
});

export default Toast;
