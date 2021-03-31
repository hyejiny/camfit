import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import {PlusOutlined} from '@ant-design/icons'
import axios from 'axios'

function FileCreate(props) {
    
    const [Images, setImages] = useState([])


    const dropHandler = (files) => {

        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0])

        axios.post('/community/', formData, config)
        .then(response => {
            if(response.data.success) {
                console.log(response.data)


                setImages([...Images, response.data.filePath])
                props.refreshFunction([...Images, response.data.filePath])


            }else {
                alert('파일을 저장하는데 실패했습니다.')
            }
        })
    }




    return (
        <div>
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

        </div>
    )
}

export default FileCreate
