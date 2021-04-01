import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import {PlusOutlined} from '@ant-design/icons'
import {imageshow} from '../../_actions/index'
import { useDispatch } from "react-redux";

function FileUpload(props) {
    
    const [Images, setImages] = useState([])
    
    const dispatch = useDispatch();

    const dropHandler = (files) => {

        let formData = new FormData();

        formData.append("file", files[0])
        // var object = {}
        //         formData.forEach(function(value,key){
        //                     object[key]=value
        //         })
        //         var json = JSON.stringify(object)

        dispatch(imageshow(formData))
        .then((res) => {
            setImages(res.payload)
        })    }



    return (
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <div 
                    style={{ width:300, height:240, border:'1px solid lightgray',
                    display: 'flex', alignItems:'center', justifyContent:'center'}}
                    {...getRootProps()}>
                        <input {...getInputProps()} />
                        <PlusOutlined style={{fontSize : '3rem'}}/>
                    </div>
                )}
            </Dropzone>

            {/* <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}>
                {Images.map((image, index) => (
                    <div key={index}>
                        <img style={{ minWidth: '300px', width:'300px', height: '240px'}}
                            src={`http://localhost:5000/${image}`}
                        />
                    </div>
                ))}                           



            </div> */}
        </div>
    )
}

export default FileUpload
