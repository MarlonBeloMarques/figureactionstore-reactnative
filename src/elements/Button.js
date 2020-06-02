/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants';

export default function Button(props) {
  const {
    style,
    opacity,
    color,
    shadow,
    children,
    radius,
    disableRadiusDefault,
  } = props;

  const buttonStyles = [
    disableRadiusDefault
      ? { borderRadius: radius }
      : { borderRadius: theme.sizes.radius },
    styles.button,
    shadow && styles.shadow, // shadow for IOS, elevation for android
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  opacity: 0.8,
  color: theme.colors.tertiary,
};

const styles = StyleSheet.create({
  button: {
    height: theme.sizes.base * 4,
    justifyContent: 'center',
    marginVertical: theme.sizes.padding / 3,
    marginTop: theme.sizes.base / 2,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3, // for android devices
  },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  white: { backgroundColor: theme.colors.white },
});
