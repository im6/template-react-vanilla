import React from 'react';
import { storiesOf } from '@storybook/react';
import Foo from './index';

storiesOf('My Demo/Foo', module)
  .add('default', () => (
    <Foo />
  ))