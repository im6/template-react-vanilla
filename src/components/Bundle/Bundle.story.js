import React from 'react';
import { storiesOf } from '@storybook/react';
import Foo from './bundle';
debugger
storiesOf('Bundle/Foo', module)
  .add('default', () => (
    <Foo />
  ))