import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type IIconType = {
  color: string;
  size: number;
};
const FeedIcon = ({color, size}: IIconType) => (
  <MaterialIcon name="account" color={color} size={size} />
);
export default FeedIcon;
