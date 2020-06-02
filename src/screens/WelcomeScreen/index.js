import React from 'react';
import { Dimensions } from 'react-native';
import { Block, Text, Button, Photo } from '../../elements';
import { theme } from '../../constants';

import background from '../../../assets/images/godofwar.png';

const { width } = Dimensions.get('window');

export default function WelcomeScreen(props) {
  function handleSubmit() {
    props.navigation.navigate('explore');
  }

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
        margin={[theme.sizes.padding * 4, theme.sizes.padding * 2, 0, 0]}
        flex={false}
        absolute
      >
        <Photo resizeMode="cover" height={110} size={200} image={background} />
      </Block>
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
        <Block margin={[theme.sizes.padding * 6, 0, 0, 0]} flex={false}>
          <Button onPress={handleSubmit}>
            <Text center bold white>
              Go Store
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
