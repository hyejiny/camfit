import React from 'react'
import {API_BASE_URL} from '../../constants'
import "./info.css";
import { Layout,Divider  } from 'antd';
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";

function InfoMain(props) {
    const { Header, Content, Footer } = Layout;
    return (
        <div>
        <div class="jb-wrap img contrast" style={{ background: `linear-gardient(to bottom,rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${API_BASE_URL+props.imgg}'), #1c1c1c`,
        backgroundImage: `url(${API_BASE_URL+props.imgg})`,
        height : '500px',
        backgroundSize: '100%, cover',
        backgroundPosition: 'center, center',
        width: '100%',
        position: 'relative'
        
        }}>
            <div class="jb-wrap">
			<div class="jb-text">
				<p>HELLO</p>
			</div>
		</div>
        </div>
        <Content style={{ padding: '0 50px' }}>
        <div class="site-layout-content">
            {props.content}
        <Divider class="ant-divider"/>
        <AiOutlineHeart size="24" color="red"/>
        <AiFillHeart size="24" color="red"/>
        </div>
        </Content>

        </div>
    )
}

export default InfoMain
