import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Block, Text, Button } from '../../elements';
import { theme } from '../../constants';
import { getOptions, getProducts } from '../../utils';
import { Product } from '../../components';

const { width } = Dimensions.get('window');

export default function ExploreScreen(props) {
  const data = getOptions();
  const products = getProducts();

  const [value, setValue] = useState('1');

  function onProductClicked() {
    props.navigation.navigate('product');
  }

  return (
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
      <Block margin={[theme.sizes.padding * 3, 0, 0, 0]} color="secondary" card>
        <Block flex={false} margin={[theme.sizes.base, 0, 0, 0]} middle row>
          {data.map((item) => {
            return (
              <Block key={item.id} margin={[0, theme.sizes.base]} flex={false}>
                <Button style onPress={() => setValue(item.id)}>
                  <Block
                    padding={[
                      theme.sizes.base,
                      theme.sizes.base,
                      0,
                      theme.sizes.base,
                    ]}
                    flex={false}
                  >
                    <Text white>{item.name}</Text>
                    {value === item.id && (
                      <Block index={-1} absolute>
                        <Button shadow size={theme.sizes.base * 2} />
                      </Block>
                    )}
                  </Block>
                </Button>
              </Block>
            );
          })}
        </Block>
        <Block middle row>
          {products.map((item) => {
            return <Product onPress={onProductClicked} item={item} />;
          })}
        </Block>
      </Block>
    </Block>
  );
}
