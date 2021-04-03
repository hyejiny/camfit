import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import Dropzone from 'react-dropzone'
import { PlusOutlined } from '@ant-design/icons';
import { imageshow, imageget } from "../../_actions/index";
import { API_BASE_URL } from "../../constants";


function FileUpload() {

    const [image, setimage] = useState()
    const dispatch = useDispatch()
    const fileChangedHandler = (event) => {
        const file = event.target.files[0].uploadedFile
        console.log(file);
        setimage({ selectedFile: event.target.files[0] })
        console.log('resailt',event.target.result)
        // dispatch(imageshow(image))
    }
      
    const uploadHandler = () => { 

        
        // console.log('uploadHandler', image['selectedFile']) 
        const form = new FormData();
        form.append('file', image['selectedFile'])
        form.append('enctype', 'multipart/form-data')
        for (let value of form.values()) {
            console.log('for ,' ,value);
        }
        dispatch(imageshow(form))
        dispatch(imageget())
        .then((res) => {
            const image_list = res.payload

            console.log(image_list);
            // setimage(image_list[0])
            var binaryData = [];
            binaryData.push(image_list[0]);
            const imageurl = URL.createObjectURL(new Blob(binaryData))
            console.log(imageurl);
            var dat = imageurl;
            var st = String(dat);
            var shot_d = st.substring(5);
            console.log(shot_d);
            setimage(shot_d)
            
            
        })
        
        
        

        
    }



    return (
        <div>
            <input type="file" onChange={fileChangedHandler}/>
            <button onClick={uploadHandler}>Upload!</button>
            <div>
                <img 
                src={image} />
            </div>
            
                <hr/>
        </div>
    )
}

export default FileUpload
