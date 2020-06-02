import React from 'react';
import { Dimensions } from 'react-native';
import { Block, Text, Button } from '../../elements';
import { theme } from '../../constants';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    // eslint-disable-next-line no-use-before-define
    <Block
      padding={[
        theme.sizes.base,
        theme.sizes.base * 2,
        0,
        theme.sizes.base * 2,
      ]}
    >
      <Block
        margin={[0, 0, 0, theme.sizes.padding]}
        size2={width / 2}
        flex={false}
      >
        <Text bold h1 white>
          Figure Action Store
        </Text>
      </Block>
      <Block middle>
        <Button>
          <Text center bold white>
            Go Store
          </Text>
        </Button>
      </Block>
    </Block>
  );
}
