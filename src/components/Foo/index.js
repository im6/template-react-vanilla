import React from 'react';
import style from './style.scss';

class Foo extends React.Component{
  constructor(prop){
    super(prop);
    this.state = {
      value: '123',
    };
    this.onChange = this.onChange.bind(this)
  }
  onChange (evt) {
    this.setState({
      value: evt.target.value,
    });
  }

  render(){
    return <div>
      <input value={this.state.value} onChange={this.onChange} />
      <h1 className={style.red}>Hello from { this.state.value }</h1>
    </div>
  }
}

export default Foo
