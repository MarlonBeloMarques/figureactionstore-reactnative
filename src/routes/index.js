import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform, Image } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen';

import { theme } from '../constants';

const screens = createStackNavigator(
  {
    welcome: WelcomeScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 6,
        shadowColor: 'transparent',
        backgroundColor: theme.colors.primary,
        elevation: 0, // for android devices. Disabling the elevation of header
      },
      cardStyle: { backgroundColor: theme.colors.primary },
      headerBackImage: (
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/icons/back.png')}
          style={{ marginRight: 5 }}
        />
      ),
      title: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
        padding: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
        padding: theme.sizes.base,
      },
    },
  }
);

export default createAppContainer(screens);
