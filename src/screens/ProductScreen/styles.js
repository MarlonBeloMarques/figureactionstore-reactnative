import { StyleSheet, Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  cart: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: theme.sizes.radius * 2,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.base,
  },
  gallery: {
    height: theme.sizes.base * 3,
    width: theme.sizes.base * 3,
    borderRadius: 10,
    marginTop: theme.sizes.base,
  },
});

export const Image = styled(Animated.Image)`
  margin-left: ${width / 1.2}px;
  height: ${(props) => props.height}%;
  width: ${(props) => props.width}%;
`;
