import React from 'react';
import { Block } from '../../elements';
import { theme } from '../../constants';

export default function ProductScreen() {
  return (
    // eslint-disable-next-line no-use-before-define
    <Block
      padding={[
        theme.sizes.base,
        theme.sizes.base * 2,
        0,
        theme.sizes.base * 2,
      ]}
    />
  );
}
