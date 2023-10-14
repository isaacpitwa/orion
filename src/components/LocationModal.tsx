import React from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CONSTANTS} from '../utils/Constants';
type ILocationModalModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setLocation: (value: string) => void;
};

const LocationModal = ({
  modalVisible,
  setModalVisible,
  setLocation,
}: ILocationModalModalProps) => {
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
        <View style={styles.bottomedView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonCloseText}>close</Text>
            </Pressable>
            <View style={styles.searchSection}>
              <MaterialIcons
                style={styles.searchIcon}
                name="map-search"
                size={20}
                color="#000"
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.locationList}>
              {CONSTANTS.LOCATIONS.map((location: any) => (
                <Pressable
                  key={location.id}
                  style={styles.location}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setLocation(location);
                  }}>
                  <Text style={styles.locationText}>{location.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomedView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    margin: 0,
    backgroundColor: '#E6E4E6',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    padding: 16,
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'transparent',
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
  buttonCloseText: {
    color: '#6E6C6E',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    color: '#424242',
  },
  searchIcon: {
    padding: 10,
    color: '#000',
  },
  location: {
    color: '79787A',
    textAlign: 'left',
    marginTop: 14,
  },
  locationText: {
    color: '79787A',
  },
  locationList: {
    marginTop: 16,
    width: '100%',
  },
});
export default LocationModal;
