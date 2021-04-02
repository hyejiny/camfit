import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { Articledetail } from "../../_actions/index"
// import { API_BASE_URL } from "../../constants";

// function ArticleDetail(props) {

    const dispatch = useDispatch();    
    const [Articles, setArticles] = useState({})
      
    useEffect(() => {
      const articleId = props.match.params.articleId
      console.log(articleId)
      dispatch(Articledetail(articleId))
      .then((res) => {
        console.log('11111');
        setArticles(res.payload)           
      })
    }, [dispatch]);

    return (
        <div>       
          <h1>Title : {Articles.title}</h1>
          <hr/>
          <h2>Content : {Articles.content}</h2>
          <hr/>
          {/* <img 
          height='240px'
          src={API_BASE_URL+Articles.image} /> */}

          <br/>


//             {/* image */}   




//             {/* info */}



//         </div>
//     )
// }

export default ArticleDetail;
