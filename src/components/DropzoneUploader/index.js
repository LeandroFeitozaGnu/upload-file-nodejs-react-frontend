import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const MyUploader = () => {
  const getUploadParams = ({ meta }) => { return { url: 'http://localhost:3000/upload' } }
    
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onSubmit={handleSubmit}
      accept="image/*"
    />
  )
}

export default MyUploader;

