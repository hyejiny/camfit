import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Card, Row} from 'antd'
import Meta from 'antd/lib/card/Meta'
import {HighlightOutlined} from '@ant-design/icons'
import ImageSlider from '../utils/ImageSlider'

function VideoClass() {


    const [Classes, setClasses] = useState([])


    useEffect(() => {

        axios.get('/fitclasses/',)
        .then(response => {
            if (response.data.success) {
                setClasses(response.data)
            } else {
                alert('상품들을 가져오는데 실패했습니다.')
            }
        })

    }, [])


    const renderCards = Classes.map((product, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                cover={<a href={`/product/${product._id}`} ><ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })


    
    return (
        <div>
            <button>
              <a href="/videoclass/upload">upload</a>
            </button>

            <div style={{ textAlign: 'center'}}>
                <h2>유료 클래스<HighlightOutlined /></h2>
            </div>


            {/* filter */}



            {/* search */}



            {/* cards */}
            <Row gutter= {16, 16}>
                {renderCards}
            </Row>




            <div style={{ justifyContent: 'center'}}>
                <button>더보기</button>
            </div>

        </div>
    )
}

export default VideoClass
