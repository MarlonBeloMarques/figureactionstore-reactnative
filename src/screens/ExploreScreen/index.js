import React from 'react';
import { Dimensions } from 'react-native';
import { Block, Text } from '../../elements';
import { theme } from '../../constants';

const { width } = Dimensions.get('window');

export default function ExploreScreen() {
  return (
    // eslint-disable-next-line no-use-before-define
    <Block>
      <Block
        flex={false}
        padding={[
          theme.sizes.base,
          theme.sizes.base * 2,
          0,
          theme.sizes.base * 2,
        ]}
      >
        <Block
          margin={[theme.sizes.padding, 0, 0, 0]}
          size2={width / 2}
          flex={false}
        >
          <Text bold h2 white>
            Explore Figure Actions
          </Text>
        </Block>
      </Block>
      <Block
        margin={[theme.sizes.padding * 3, 0, 0, 0]}
        color="secondary"
        card
      />
    </Block>
  );
}
