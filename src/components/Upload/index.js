import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import './style.css'

class Update extends Component {
  state = {
    files: [],
  }

  handleUpload = files => {
    console.log(files)
  }

  render() {
    return (
      <>
        <Dropzone accept='image/*' onDropAccepted={this.handleUpload} >
          { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
           <div className='Drop-container' {...getRootProps()} >
            <input {...getInputProps()} />
            <p>Arraste e solte. Ou clique para selecionar arquivos.</p>
           </div>
          ) }
        </Dropzone>
      </>
    )
  }
}

export default Update;
