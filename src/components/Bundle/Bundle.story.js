import React from 'react';
import { storiesOf } from '@storybook/react';
import { Foo, Bar } from './bundle'

storiesOf('Bundle', module)
  .add('Foo', () => {
    return <Foo />
  })
  .add('Bar', () => {
    return <Bar />
  })