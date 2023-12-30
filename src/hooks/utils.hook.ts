import {useState} from 'react';
import {NativeScrollEvent} from 'react-native';

export const useToggleShow = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return {show, toggleShow};
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
