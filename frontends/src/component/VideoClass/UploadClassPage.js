import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd'
import FileUpload from '../utils/FileUpload'
import Axios from 'axios'


const {Title} = Typography;
const {TextArea} = Input;


const Categories = [
  {key:1, value:"등"},
  {key:2, value:"가슴"},
  {key:3, value:"팔"},
  {key:4, value:"복근"},
  {key:5, value:"하체"},
]

function UploadClassPage(props) {
  
  const [Name, setName] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState(0)
  const [Category, setCategory] = useState(1)
  
  const [Image, setImage] = useState([])
  
  const nameChageHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const discriptionChageHandler = (event) => {
    setDescription(event.currentTarget.value)
  }

  const priceChageHandler = (event) => {
    setPrice(event.currentTarget.value)
  }
  const categoryChageHandler = (event) => {
    setCategory(event.currentTarget.value)
  }

  const updateImages = (newImages) => {
    setImage(newImages)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(!Name || !Description || !Price || !Category ||Image) {
      return alert("모든 값을 넣어주셔야 합니다.")
    }


    const body = {
      // user: , 
      title: Name,
      content: Description,
      price: Price,
      image: Image
    }
    // 서버에 채운 값들을 request로 보낸다
    
  }
    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Title level={2}>클래스 업로드</Title>
            </div>
            <Form onSubmit={submitHandler}>
              {/* drop zone */}



              <FileUpload  />




              <br/>
              <br/>
              <label>이름</label>
              <Input onChange={nameChageHandler} value={Name}/>
              <br/><br/>
              <br/>
              <br/>
              <label>설명</label>
              <TextArea onChange={discriptionChageHandler} value={Description}/>
              <br/><br/>
              <br/>
              <br/>
              <label>가격</label>
              <Input type="number" onChange={priceChageHandler} value={Price}/>
              <br/><br/>
              <select onChange={categoryChageHandler} value={Category}>
                {Categories.map(item => (
                  <option key={item.key} value={item.key}>{item.value}</option>
                ))}




                
              </select>
              <br/><br/>
              <Button type="submit">확인</Button>

            </Form>




        </div>
    )
}

export default UploadClassPage
