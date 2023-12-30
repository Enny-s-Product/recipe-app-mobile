import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';

type IScreenProps = React.FC<{
  style?: StyleProp<ViewStyle>;
  noKeyboardAvoidingView?: boolean;
  children?: ReactNode;
  center?: boolean;
  fadeBg?: boolean;
}>;

/**
 * This component is used to configure screens.
 * @param props IScreenProps
 * @returns React.ReactElement
 */
const Screen: IScreenProps = function Screen({
  children,
  style,
  noKeyboardAvoidingView,
  center,
  fadeBg,
}) {
  const {themeColors} = useTheme();

  return (
    <>
      {noKeyboardAvoidingView ? (
        <View
          style={[
            styles.container,
            {
              backgroundColor: fadeBg
                ? themeColors.fadeBg
                : themeColors.background,
              justifyContent: center ? 'center' : 'flex-start',
            },
            style,
          ]}>
          {children}
        </View>
      ) : (
        <KeyboardAvoidingView
          style={[
            styles.container,
            {
              backgroundColor: fadeBg
                ? themeColors.fadeBg
                : themeColors.background,
              justifyContent: center ? 'center' : 'flex-start',
            },
            style,
          ]}
          behavior={Platform.select({ios: 'padding', android: undefined})}>
          {children}
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

// export Screen component as the modules default
export default Screen;
