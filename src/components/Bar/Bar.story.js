import React from 'react';
import { storiesOf } from '@storybook/react';
import Bar from './index';

storiesOf('My App/Bar', module)
  .add('default', () => (
    <Bar />
  ))