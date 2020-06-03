import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export default StyleSheet.create({
  cart: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: theme.sizes.radius * 2,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.base,
  },
});
