import React from 'react';
import { Dimensions } from 'react-native';
import { Block, Text } from '../../elements';
import { theme } from '../../constants';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    // eslint-disable-next-line no-use-before-define
    <Block>
      <Block
        margin={[0, 0, 0, theme.sizes.padding * 2]}
        size2={width / 2}
        flex={false}
      >
        <Text bold h1 white>
          Figure Action Store
        </Text>
      </Block>
    </Block>
  );
}
