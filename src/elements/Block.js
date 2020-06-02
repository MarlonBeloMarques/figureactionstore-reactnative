/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../constants';

export default function Block(props) {
  function handleMargins() {
    const { margin } = props;
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  }

  function handlePaddings() {
    const { padding } = props;
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  }

  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    size,
    size2,
    shadow,
    color,
    space,
    padding,
    margin,
    wrap,
    style,
    border,
    fullBorder,
    children,
  } = props;

  const blockStyles = [
    styles.block,
    size && { height: size },
    size2 && { width: size2 },
    border && styles.border,
    fullBorder && styles.fullBorder,
    flex && { flex },
    flex === false && { flex: 0 }, // redefinir / desativar flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    wrap && { flexWrap: 'wrap' },
    color && styles[color], // estilos predefinidos cores para backgroundColor
    color && !styles[color] && { backgroundColor: color }, // backgroundColor personalizado
    style, // reescrever estilos predefinidos
  ];

  return <View style={blockStyles}>{children}</View>;
}

export const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: theme.sizes.radius * 2,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3, // for android devices
  },
  border: {
    borderBottomWidth: 1,
    borderColor: theme.colors.gray3,
  },
  fullBorder: {
    borderWidth: 1,
    borderColor: theme.colors.white,
  },

  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 },
});
