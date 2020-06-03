import React from 'react';
import { Dimensions } from 'react-native';
import { Block, Text, Button, Photo } from '../../elements';
import { theme } from '../../constants';
import { getProducts } from '../../utils';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export default function ProductScreen() {
  const products = getProducts();

  return (
    <Block>
      <Block
        index={2}
        flex={false}
        absolute
        style={{ left: width / 2.4, top: theme.sizes.padding }}
      >
        <Photo height={110} size={150} image={products[0].image} />
      </Block>
      <Block
        index={3}
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
            {products[0].title}
          </Text>
        </Block>
        <Block flex={false} margin={[theme.sizes.base, 0]}>
          {products[0].other_images.map((item) => {
            return (
              <Button style>
                <Block
                  flex={false}
                  padding={theme.sizes.base / 3}
                  color="white"
                  style={styles.gallery}
                >
                  <Photo
                    size={100}
                    height={100}
                    resizeMode="contain"
                    image={item}
                  />
                </Block>
              </Button>
            );
          })}
        </Block>
      </Block>
      <Block
        padding={[
          theme.sizes.base * 2,
          theme.sizes.base * 2,
          0,
          theme.sizes.base * 2,
        ]}
        margin={[theme.sizes.padding * 3, 0, 0, 0]}
        color="secondary"
        card
      >
        <Text white h3 bold>
          About
        </Text>
        <Block flex={false} margin={[theme.sizes.base, 0, theme.sizes.base, 0]}>
          <Text white>{products[0].subtitle}</Text>
        </Block>
        <Block
          flex={false}
          margin={[theme.sizes.base, 0, theme.sizes.padding * 2, 0]}
          size2={width / 1.9}
        >
          <Text white light>
            {products[0].about}
          </Text>
        </Block>
      </Block>
      <Block
        absolute
        index={3}
        padding={[
          0,
          theme.sizes.base * 2,
          theme.sizes.padding * 2,
          theme.sizes.base * 2,
        ]}
        row
        style={{ top: height / 1.5 }}
      >
        <Block middle>
          <Text white bold h3>
            {products[0].price}
          </Text>
        </Block>
        <Block middle flex={false}>
          <Button style={styles.cart}>
            <Text center white>
              Add to cart
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
