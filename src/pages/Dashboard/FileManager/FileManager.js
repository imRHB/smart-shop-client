

// new version
import React, { useState } from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function FileManage() {

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile] = useState(null);

  // pdf file error state
  const [pdfError, setPdfError] = useState('');



  // handle file onChange event
  const allowedFiles = ['application/pdf'];

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError('');
          setPdfFile(e.target.result);
      
        }
      }
      else {
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    }
    else {
      console.log('please select a PDF');
    }
  }

  console.log(pdfFile);

  return (
    <div className="container">

      {/* Upload PDF */}
      <form>

        <label className='mt-5 mb-3'><h5 >Upload Document PDF File </h5></label>
        <br></br>

      

        <input style={{width:'40%', backgroundColor:'skyblue'}} type='file' className="form-control"
          onChange={handleFile}></input>

        {/* we will display error message in case user select some file
        other than pdf */}
        {pdfError && <span className='text-danger'>{pdfError}</span>}

      </form>

      {/* View PDF */}
   
      <div className="viewer">

        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">

            <div className='row'>
              <div style={{  width:'50%', height:'390px' }} className='col-12 col-lg-6 col-md-6 p-3 mt-3'>
                <div  style={{backgroundColor:'white', height: '300px'}} className='w-80 shadow p-1 '>

                  <Viewer style={{height:'300px', width:'46%'}} fileUrl={pdfFile}
                    plugins={[defaultLayoutPluginInstance]}>
                      </Viewer>
                      <div className='text-center p-1'>
                      <button style={{border:'1px solid'}} className='btn rounded mt-4'>
                       <a style={{ textDecoration:'none', color:'black'}} href= {pdfFile} target="_blank" rel="noopener noreferrer">New Tab</a>
                       </button>
                      </div>
               
            
                </div>
              </div>
              <div style={{  width:'50%', height:'390px' }} className='col-12 col-lg-6 col-md-6 p-3 mt-3'>
                <div  style={{backgroundColor:'white', height: '300px'}} className='w-80 shadow p-1 '>

                  <Viewer style={{height:'300px', width:'50%'}} fileUrl={pdfFile}
                    plugins={[defaultLayoutPluginInstance]}>
                      </Viewer>
                      <div className='text-center p-2'>
                      <button style={{border:'1px solid'}} className='btn  rounded mt-4'>
                       <a style={{ textDecoration:'none', color:'black'}} href= {pdfFile} target="_blank" rel="noopener noreferrer">New Tab</a>
                       </button>
                      </div>
               
            
                </div>
              </div>

            </div>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile && <>No file is selected yet</>}

      </div>

    </div>
  );
}

export default FileManage;

