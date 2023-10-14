import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function IconButton({icon = 'calendar-plus-o'}) {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name={icon} size={20} color={'#D8D8D8'} />
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
