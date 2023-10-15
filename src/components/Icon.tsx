import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type IIconType = {
  color: string;
  size: number;
};
const FeedIcon = ({color, size}: IIconType) => (
  <FontAwesomeIcon name="feed" color={color} size={size} />
);
export default FeedIcon;
