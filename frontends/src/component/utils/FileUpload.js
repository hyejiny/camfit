import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import Dropzone from 'react-dropzone'
import { PlusOutlined } from '@ant-design/icons';
import { imageshow, imageget } from "../../_actions/index";
import axios from 'axios';


function FileUpload() {

    const [image, setimage] = useState({})
    const dispatch = useDispatch()
    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setimage({ selectedFile: event.target.files[0] })
        // dispatch(imageshow(image))
    }
      
    const uploadHandler = () => { 
        console.log(image) 
        dispatch(imageshow(image))
        // dispatch(imageget())
        // .then((res) => {
        //     const image_list = res.payload
        //     console.log(image_list);
        //     setimage(image_list)
        // })
        // const formData = new FormData()
    }



    return (
        <div>
            <input type="file" onChange={fileChangedHandler}/>
            <button onClick={uploadHandler}>Upload!</button>
        </div>
    )
}

export default FileUpload
