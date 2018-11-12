import React from 'react';
import style from './style.css';

class Foo extends React.Component{
  constructor(prop){
    super(prop);
    const me = this;
  }

  render(){
    return <h1 className={style.red}>Hello from Foo</h1>
  }
}

export default Foo