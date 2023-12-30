import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Spinner from '../../components/atoms/Spinner';
import {
  DarkThemeColors,
  IThemeColor,
  LightThemeColors,
} from '../../configs/colors.config';
import {STORE_KEYS} from '../../configs/store.config';
import {asyncGet, asyncStore} from '../../utils/async.util';
import sleep from '../../utils/sleep.util';
import {
  IThemeContext,
  IThemeName,
  IThemeProviderProps,
  IThemeSwitchWaitProps,
} from './interfaces';

export const ThemeContext = React.createContext<IThemeContext>({
  currentTheme: 'light',
  changeTheme: () => {},
  themeColors: LightThemeColors,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

/**
 * This component serves as the theme provider and sets the interface for
 * switching and getting the selected theme.
 * @returns React.ReactElement
 */
const ThemeProvider: IThemeProviderProps = function ThemProvider({children}) {
  const [theme, setTheme] = React.useState<IThemeName>('light');
  const [isPending, setIsPending] = React.useState<boolean>(true);
  const [colors, setColors] =
    React.useState<Record<IThemeColor, string>>(LightThemeColors);

  /**
   * This method is used to change the current theme being used within the
   * mobile app.
   * @param {IThemeName} name
   */
  const changeTheme = React.useCallback(async function changeTheme(
    name: IThemeName,
  ) {
    // toggle pending mode on
    setIsPending(true);
    // persist new them
    await asyncStore(STORE_KEYS.THEME, name);
    // update theme in state
    await sleep(1500);
    // set theme colors
    setColors(name === 'light' ? LightThemeColors : DarkThemeColors);
    // set current theme
    setTheme(name);
    // toggle pending mode off
    setIsPending(false);
  },
  []);

  /**
   * This method is used to set the initial theme, this will get the selected
   * theme from the async store.
   */
  const setInitialTheme = React.useCallback(
    async function setInitialTheme() {
      const persistedTheme = await asyncGet<IThemeName>(STORE_KEYS.THEME);
      // no need to select theme if alternate theme is not set
      if (persistedTheme !== 'light') {
        // change android navigation bar color

        // toggle pending mode off and load application
        return setIsPending(false);
      }
      // change android navigation bar color

      // change theme to the persisted theme
      changeTheme(persistedTheme);
    },
    [changeTheme],
  );

  // handle component did mount
  React.useEffect(() => {
    setInitialTheme();
    // handle component will unmount
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render the app
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeTheme: changeTheme,
        themeColors: colors,
      }}>
      {!isPending ? (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
          <StatusBar
            barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={colors.background}
            hidden={false}
          />
          {children}
        </View>
      ) : (
        <ThemeSwitchWait
          backgroundColor={colors.background}
          textColor={colors.blackWhite}
          spinnerColor={Platform.select({
            android: colors.blackWhite,
            ios: colors.blackWhite,
          })}
        />
      )}
    </ThemeContext.Provider>
  );
};

/**
 * This component replaces the app and is show to the user while the
 * application theme is being selected.
 * @param {IThemeSwitchWaitProps} props
 * @returns React.ReactElement
 */
const ThemeSwitchWait: React.FC<IThemeSwitchWaitProps> =
  function ThemeSwitchWait({spinnerColor, backgroundColor, textColor}) {
    return (
      <View style={[styles.switchWaitContainer, {backgroundColor}]}>
        <ActivityIndicator color={textColor} />
        <Text style={[styles.switchWaitText, {color: textColor}]}>
          Changing color scheme....
        </Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchWaitText: {
    marginVertical: 20,
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center',
  },
  switchWaitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

// export ThemeProvider component as the default module
export default ThemeProvider;
