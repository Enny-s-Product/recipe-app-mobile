import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import Typography from '../atoms/Typography';
import {ISelect} from '../../types';

interface IProps {
  options: ISelect[];
  searchTerm: string;
  height?: number;
  onPress: (params: ISelect) => void;
}

const AutoCompleteModal: React.FC<IProps> = ({
  options,
  height,
  searchTerm,
  onPress,
}) => {
  const {themeColors} = useTheme();
  const filteredData = options?.filter(
    item =>
      item?.label?.includes(searchTerm) || item?.value?.includes(searchTerm),
  );

  return (
    <View style={[styles.container, {backgroundColor: themeColors.background}]}>
      <FlatList
        data={filteredData}
        style={{
          height:
            filteredData?.length === 0 || searchTerm?.trim().length === 0
              ? 0
              : height
              ? height
              : 200,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableHighlight
              underlayColor="rgba(0,0,0,0.05)"
              onPress={() => onPress(item)}>
              <View
                style={[
                  styles.item,
                  {
                    borderBottomWidth: index + 1 < filteredData?.length ? 1 : 0,
                    borderBottomColor: themeColors.borderColor,
                  },
                ]}>
                <Typography size={16} weight="medium">
                  {item?.label}
                </Typography>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginTop: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  item: {
    paddingHorizontal: 19,
    paddingVertical: 14,
  },
});

export default AutoCompleteModal;
