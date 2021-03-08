import React, { Component } from 'react';
import Dropzone from '../Dropzone'
import './style.css'

class Update extends Component {
  state = {
    files: [],
  }

  render() {
    return (
      <>
        <Dropzone />
      </>
    )
  }
}

export default Update;
