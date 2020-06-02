/* eslint-disable global-require */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { theme } from '../constants';

export default function Typography(props) {
  const {
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    small,
    size,
    transform,
    align,
    // estilos
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    primary,
    secondary,
    tertiary,
    white,
    style,
    underline,
    children,
  } = props;

  const textStyles = [
    styles.text,
    underline && { textDecorationLine: 'underline' },
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && { fontSize: size },
    transform && { textTransform: transform },
    align && { textAlign: align },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && { color },
    // color shortcuts
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    white && styles.white,
    style, // rewrite predefined styles
  ];

  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Light': require('../../assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Medium': require('../../assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Regular': require('../../assets/fonts/Ubuntu-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
    fontFamily: 'Ubuntu-Regular',
  },
  // variations
  regular: {
    // fontWeight: 'normal',
    fontFamily: 'Ubuntu-Regular',
  },
  bold: {
    // fontWeight: 'bold',
    fontFamily: 'Ubuntu-Bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    // fontWeight: '500',
    fontFamily: 'Ubuntu-Medium',
  },
  light: {
    // fontWeight: '200',
    fontFamily: 'Ubuntu-Light',
  },
  // position
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  // colors
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  white: { color: theme.colors.white },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small,
});
