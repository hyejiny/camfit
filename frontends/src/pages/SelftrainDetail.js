import React, { Component} from 'react';
import SelftrainSidebar from '../component/Selftrain/SelftrainSidebar';
import {Carousel, Button} from 'react-bootstrap';
import './page.css';
import img1 from '../media/logo512.png'
class SelftrainDetail extends Component {
    render() {
        return (
            <div className="Selftrain row">
                <SelftrainSidebar className="col"></SelftrainSidebar>
                <div className="col SelftrainCarousel" >
                    <div className="row">

                        <Carousel className="CarouselImg col-4 my-auto" style={{background:'gray'}}>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            
                            // src={require("holder.js/800x400?text=First slide&bg=373940")}
                            src={img1}
                            alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3 style={{color:'black'}}>First slide label</h3>
                            <p style={{color:'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            // src={require("../media/logo512.png")}
                            src={img1}
                            // src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                            <h3 style={{color:'black'}}>Second slide label</h3>
                            <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block "
                            // src={require("../media/logo512.png")}
                            src={img1}
                            // src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3 style={{color:'black'}}>Third slide label</h3>
                            <p style={{color:'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        </Carousel>
                        <div className="col text-align-center">

                            <h1>제목</h1>
                            <h2>내용</h2>
                            <Button href='/selftrain/exercise'>sfad</Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SelftrainDetail