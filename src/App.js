import React, { Component } from 'react';
import MyUploader from './components/DropzoneUploader';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3> Envio de imagens </h3>
        <div className='content'>
          <MyUploader />
        </div>
      </div>
    )
  }
}

export default App;
