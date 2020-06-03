/* eslint-disable camelcase */
import React from 'react';
import { Block, Text, Photo, Button } from '../elements';
import { theme } from '../constants';

export default function Product(props) {
  const { item } = props;

  return (
    <Button style {...props}>
      <Block
        margin={[theme.sizes.padding * 3, theme.sizes.padding]}
        flex={false}
        size={240}
        size2={133}
        color="secondary"
        style={{ borderRadius: theme.sizes.radius }}
      >
        <Block center flex={false} absolute index={2}>
          <Photo
            size={100}
            height={55}
            resizeMode="contain"
            image={item.image}
          />
        </Block>
        <Block
          padding={[theme.sizes.base, theme.sizes.base, 0, theme.sizes.base]}
          margin={[theme.sizes.padding * 3, 0, 0, 0]}
          bottom
          size={155}
          size2={133}
          color="white"
          style={{ borderRadius: theme.sizes.radius }}
        >
          <Block margin={[theme.sizes.padding * 2, 0, 0, 0]}>
            <Text secondary center bold>
              {item.title}
            </Text>
            <Text secondary caption bold center>
              {item.subtitle}
            </Text>
          </Block>
          <Block margin={[0, 0, theme.sizes.base, 0]} flex={false}>
            <Text size={16} center bold>
              {item.price}
            </Text>
          </Block>
        </Block>
      </Block>
    </Button>
  );
}
