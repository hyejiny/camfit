import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import Dropzone from 'react-dropzone'
import { PlusOutlined } from '@ant-design/icons';
import { imageshow } from "../../_actions/index";
import axios from 'axios';


function FileUpload() {

    const [image, setimage] = useState({})
    const dispatch = useDispatch()
    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setimage({ selectedFile: event.target.files[0] })

    }
      
    const uploadHandler = () => { 
        console.log(image) 
        const formData = new FormData()
        formData.append(
            this.state.selectedFile,
            this.state.selectedFile.name
        )
    }



    return (
        <div>
            <input type="file" onChange={fileChangedHandler}/>
            <button onClick={uploadHandler}>Upload!</button>
        </div>
    )
}

export default FileUpload
