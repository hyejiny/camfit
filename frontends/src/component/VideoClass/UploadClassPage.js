import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd'


const {Title} = Typography;
const {TextArea} = Input;
function UploadClassPage() {
  
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


    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Title level={2}>클래스 업로드</Title>
            </div>
            <Form>
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
              <select>
                <option></option>
              </select>
              <br/><br/>
              <Button>확인</Button>

            </Form>




        </div>
    )
}

export default UploadClassPage
