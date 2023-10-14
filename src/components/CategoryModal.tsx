import React from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {CONSTANTS} from '../utils/Constants';

type ICategoryModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

const CategoryModal = ({
  modalVisible,
  setModalVisible,
}: ICategoryModalProps) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Choose feed category</Text>
          <View style={styles.categoriesList}>
            {CONSTANTS.FEED_CATEGORIES.map((item: any) => (
              <Pressable
                key={item.id}
                style={[styles.categoryButton]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.categoryButtonText}>{item.name}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalView: {
    margin: 16,
    backgroundColor: '#E5E4E6',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 132,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '100%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  categoryButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 16,
    margin: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9F9E9F',
  },
  categoryButtonText: {
    color: '#8C80AE',
  },
  categoriesList: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    // flexWrap: 'wrap',
  },
});
export default CategoryModal;
