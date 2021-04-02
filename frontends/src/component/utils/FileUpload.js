import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import {PlusOutlined} from '@ant-design/icons'
import {imageshow} from '../../_actions/index'
import { useDispatch } from "react-redux";

function FileUpload(props) {
    
    const [Image, setImage] = useState([])
    
    const dispatch = useDispatch();

    const newBook = () => {
        const uploadData = new FormData();
        uploadData.append('image', Image, Image.name);
        dispatch(imageshow(uploadData))
        .then((res) => {
            console.log(res.payload)
        })    }



    return (
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <label>
                Cover
                <input type="file" onChange={(evt) => setImage(evt.target.files[0])}/>
            </label>
            {/* <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <div 
                    style={{ width:300, height:240, border:'1px solid lightgray',
                    display: 'flex', alignItems:'center', justifyContent:'center'}}
                    {...getRootProps()}>
                        <input {...getInputProps()} />
                        <PlusOutlined style={{fontSize : '3rem'}}/>
                    </div>
                )}
            </Dropzone> */}

            {/* <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>
                {Images.map((image, index) => (
                    <div key={index}>
                        <img style={{ minWidth: '300px', width:'300px', height: '240px'}}
                            src={`http://localhost:5000/${image}`}
                        />
                    </div>
                ))}                           



            </div> */}
            <button onClick={() => newBook()}>image</button>
        </div>
    )
}

export default FileUpload
