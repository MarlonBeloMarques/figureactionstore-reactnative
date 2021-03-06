import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform, Image } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Entypo, AntDesign } from '@expo/vector-icons';
import WelcomeScreen from '../screens/WelcomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProductScreen from '../screens/ProductScreen';

import { theme } from '../constants';
import { Button } from '../elements';

const screens = createStackNavigator(
  {
    welcome: WelcomeScreen,
    explore: {
      screen: ExploreScreen,
      navigationOptions: () => ({
        headerRight: (
          <Button style>
            <Entypo name="shopping-cart" size={20} color="white" />
          </Button>
        ),
      }),
    },
    product: {
      screen: ProductScreen,
      navigationOptions: () => ({
        headerRight: (
          <Button style>
            <AntDesign name="heart" size={20} color={theme.colors.red} />
          </Button>
        ),
      }),
    },
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
          style={{
            marginRight: 5,
          }}
        />
      ),
      headerBackTitleVisible: null,
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
