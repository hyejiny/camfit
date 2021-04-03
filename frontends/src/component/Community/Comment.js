import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { createComment, CommentList, editComment, deleteComment } from "../../_actions/index";
import { useHistory, useLocation } from "react-router";

function Comment(props) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [Article, setArticle] = useState({})
  const [Comment, setComment] = useState("")

  
  const commentChangeHandler = (e) => {
    setComment(e.currentTarget.value)
  }

  const submitComment = (e) => {
    e.preventDefault();

    if (!Comment) {
      return alert("내용을 입력해주셔야 합니다.")
    }

    const body = {
      content: Comment
    }

    dispatch(createComment(body, Article.id))
    .then((res) => {
      console.log(res.payload);
      props.history.push(`/Community/${Article.id}/detail/`)
    });
  }

  return (
    <div className="Comment">
      <label>댓글</label>
      <textarea onChange={commentChangeHandler} value={Comment}/>
      <button type="submit" onClick={submitComment}>Comment Submit</button>     
    </div>
  )
}

export default Comment;
