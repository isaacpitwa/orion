import React from 'react';
import IonicIcons from 'react-native-vector-icons/Ionicons';

type IIconType = {
  color: string;
  size: number;
};
const AddPost = ({color, size}: IIconType) => (
  <IonicIcons name="add-circle-outline" color={color} size={size} />
);
export default AddPost;
