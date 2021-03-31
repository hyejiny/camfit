import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../component/list';
import UploadPost from '../component/uploadPost';
import { boardDelete, boardSave, boardSelected } from '../reducer/board';


function CommunityCard() {

    const [post, setPost] = useState({
        id: '',
        title: '',
        content: ''
    });

    const dispatch = useDispatch();

    const onDelete = (postId) => dispatch(boardDelete(postId));
    const onSave = (dataToSubmit) => dispatch(boardSave(dataToSubmit));

    const {selected} = useSelector(state => state.board);

    const postClickHandler = (postId) => 
    {
        dispatch(boardSelected(postId));
        if(JSON.stringify(selected) !== '{}') {
            setPost(selected);
        }
    }

    const changeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setPost({
            id: '', title: '', content: ''
        })
    }

    const {boards} = useSelector(state => state.board);

    return (
        <div>
            <div>
                <table>
                    <tbody>
                        <tr align="center">
                            <td width="50">번호</td>
                            <td width="100">제목</td>
                            <td width="200">내용</td>
                        </tr>
                        {
                            boards.map(post =>
                            (
                                <List 
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    content={post.content}
                                    onDelete={onDelete}
                                    postClickHandler={postClickHandler}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <UploadPost 
                    onSave={onSave} 
                    changeInput={changeInput} 
                    post={post}
                    resetForm={resetForm} 
                />
            </div>
        </div>
    );
}

export default CommunityCard;