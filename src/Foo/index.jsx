import React from 'react';

class Foo extends React.Component{
  constructor(prop){
    super(prop);
    const me = this;
  }
  render(){
    return <h1>Hello from Foo</h1>
  }
}

export default Foo