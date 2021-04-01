import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import './page.css';
import ArticleSearch from '../component/Community/ArticleSearch';
import { ArticleList } from "../_actions/index";
import ListGroup from 'react-bootstrap/ListGroup';

function Community() {

    const dispatch = useDispatch();
    const [Articles, setArticles] = useState([])

    useEffect(() => {
        dispatch(ArticleList())
        .then((res) => {
          const article_list = res.payload
          console.log(res.payload)
          setArticles(article_list)
        })
      }, [dispatch])

    const [SearchTerm, setSearchTerm] = useState("")

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    const renderLists = Articles.map((article, index) => {

        return <ListGroup 
                horizontal
                cover={<a href={'/community/'+ article.id + '/detail'}></a>}
            >
                <ListGroup.Item>{article.user.username}</ListGroup.Item>
                <ListGroup.Item>{article.title}</ListGroup.Item>
                <ListGroup.Item>{article.content}</ListGroup.Item>
            </ListGroup>
    })

    return (
        <div className="Community">
            자유게시판
            <br/>
            {/* Create */}
            <button>
              <a href="/community/create">작성하기</a>
            </button>

            {/* Search */}
            <ArticleSearch
                refreshFunction={updateSearchTerm}
            />
            
            {/* Read */}
            <row gutter= {16, 16}>
                {renderLists}
            </row>
        </div>
    )
}


export default Community;