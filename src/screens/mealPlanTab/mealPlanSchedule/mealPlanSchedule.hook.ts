import {useState} from 'react';
import {days} from '../../../data/mealPlan';
import moment from 'moment';

const ONE_DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

export const useMealPlanSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now()).getDate(),
  );

  const [index, setIndex] = useState(0);

  const getDateFromIndex = (index: number) => {
    return new Date(Date.now() + ONE_DAY_MILLISECONDS * index).getDate();
  };

  const getFullDateFromIndex = (index: number) => {
    const timeStamp = Date.now() + ONE_DAY_MILLISECONDS * index;
    return `${moment(new Date(timeStamp)).format('dddd DD MMMM')}`;
  };

  const currentDay = new Date(Date.now()).getDay();

  const firstItems = days.slice(0, currentDay - 1);
  const remainingItems = days.slice(currentDay - 1);

  const reArrangedDays = remainingItems.concat(firstItems);

  return {
    reArrangedDays,
    selectedDate,
    setSelectedDate,
    index,
    getDateFromIndex,
    setIndex,
    getFullDateFromIndex,
  };
};
