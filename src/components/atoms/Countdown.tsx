import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Typography, {ITypographyProps} from './Typography';

interface IProps extends ITypographyProps {
  countdown: number;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
}

const Countdown: React.FC<IProps> = ({countdown, setCountdown, ...props}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  // Format minutes and seconds with leading zeros if necessary
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <Typography
      {...props}>{`${formattedMinutes}:${formattedSeconds}`}</Typography>
  );
};

export default Countdown;
