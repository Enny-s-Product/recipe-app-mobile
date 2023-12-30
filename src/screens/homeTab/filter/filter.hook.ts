import {useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export type FilterContents =
  | 'nationality'
  | 'dishType'
  | 'dietType'
  | 'excludeIngridient'
  | 'includeIngridient';

export const useFilter = () => {
  const [display, setDisplay] = useState<Record<FilterContents, boolean>>({
    nationality: false,
    dishType: false,
    dietType: false,
    excludeIngridient: false,
    includeIngridient: false,
  });
  const [hideButtons, setHideButtons] = useState(false);
  const [dietType, setDietType] = useState('');

  const toggleDisplay = (content: FilterContents) => {
    setDisplay({...display, [content]: !display[content]});
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;

    // Check if scrolling down
    if (currentScrollY > scrollY) {
      // Scrolling down, hide the button
      setHideButtons(false);
    } else {
      // Scrolling up or not scrolling, show the button
      setHideButtons(true);
    }

    // Update the scroll position
    setScrollY(currentScrollY);
  };

  return {
    display,
    toggleDisplay,
    hideButtons,
    setHideButtons,
    handleScroll,
    dietType,
    setDietType,
  };
};
