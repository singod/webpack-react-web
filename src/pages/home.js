import React, { Component } from 'react';
import Button from '../components/button';

export default class Home extends Component {
  constructor (prop) {
    super(prop);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Button text={'Home'}/>
      </div>
    )
  }
}
