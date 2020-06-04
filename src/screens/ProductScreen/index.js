import React, { useState, useEffect } from 'react';
import { Dimensions, Animated } from 'react-native';
import { Block, Text, Button, Photo } from '../../elements';
import { theme } from '../../constants';
import { getProducts, processImages } from '../../utils';
import styles, { Image } from './styles';

const { width, height } = Dimensions.get('window');

export default function ProductScreen(props) {
  const id = props.navigation.getParam('id');

  const [product, setProduct] = useState({
    id: '0',
    image: '',
    height: 0,
    width: 0,
    other_images: [],
    title: '',
    subtitle: '',
    price: '',
    about: '',
  });
  const [openProgress, setOpenProgress] = useState(new Animated.Value(0));

  const products = getProducts();

  useEffect(() => {
    products.map((item) => {
      if (item.id === id) {
        const source = processImages(item.width, item.height);
        setProduct({
          id: item.id,
          image: item.image,
          height: source[1],
          width: source[0],
          other_images: item.other_images,
          title: item.title,
          subtitle: item.subtitle,
          price: item.price,
          about: item.about,
        });
      }
    });
  }, []);

  useEffect(() => {
    Animated.timing(openProgress, {
      toValue: 1,
      duration: 1200,
    }).start();
  }, []);

  return (
    <Block>
      <Block
        center
        index={2}
        flex={false}
        absolute
        style={{ top: theme.sizes.padding * 2 }}
      >
        <Image
          height={product.height}
          width={product.width}
          source={product.image}
          style={{
            opacity: openProgress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}
        />
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
            {product.title}
          </Text>
        </Block>
        <Block flex={false} margin={[theme.sizes.base, 0]}>
          {product.other_images.map((item) => {
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
        margin={[theme.sizes.base, 0, 0, 0]}
        color="secondary"
        card
      >
        <Text white h3 bold>
          About
        </Text>
        <Block flex={false} margin={[theme.sizes.base, 0, theme.sizes.base, 0]}>
          <Text white>{product.subtitle}</Text>
        </Block>
        <Block
          flex={false}
          margin={[theme.sizes.base, 0, theme.sizes.padding * 2, 0]}
          size2={width / 2.5}
        >
          <Text white light>
            {product.about}
          </Text>
        </Block>
      </Block>
      <Block
        absolute
        index={3}
        padding={[
          theme.sizes.padding,
          theme.sizes.base * 2,
          theme.sizes.padding * 2,
          theme.sizes.base * 2,
        ]}
        row
        style={{ top: height / 1.5 }}
      >
        <Block middle>
          <Text white bold h3>
            {product.price}
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
