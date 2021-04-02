import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { Articledetail } from "../../_actions/index"
import { API_BASE_URL } from "../../constants";
import ArticleEdit from "./ArticleEdit"
import {useHistory} from "react-router";

function ArticleDetail(props) {

    const history = useHistory();
    const dispatch = useDispatch();    
    const [Article, setArticle] = useState({})
      
    useEffect(() => {
      const articleId = props.match.params.articleId

      console.log(articleId)
      dispatch(Articledetail(articleId))
      .then((res) => {
        console.log('11111');
        setArticle(res.payload)           
      })
    }, [dispatch]);

    return (
        <div>       
          <h1>Title : {Article.title}</h1>
          <hr/>
          <h2>Content : {Article.content}</h2>
          <hr/>
          <h2>생성날짜 : {Article.created_at}</h2>
          <hr/>
          <h2>수정날짜 : {Article.updated_at}</h2>
          <hr/>
          {/* image */}   
          {/* <img 
          height='240px'
          src={API_BASE_URL+Articles.image} /> */}
          <br/>

          {/* Update */}
          <button
          // style={{ width: '50px', height: '25px'}}
           onClick={() => {history.push({
            pathname: `/community/${Article.id}` ,
            state: {Article: Article}
          })}}>수정하기</button>

          {/* Delete */}
          <button>
            <a href="/community/">삭제하기</a>
          </button>
        </div>
    )
}

export default ArticleDetail;
