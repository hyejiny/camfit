import React, { Component } from 'react';
import './page.css';
import ArticleCreate from '../component/Community/ArticleCreate';
import FileCreate from '../component/Community/FileCreate';


class Community extends Component {
    render() {
        return (
            <div className="Community">
                자유게시판
                <ArticleCreate/>
                <FileCreate/>
            </div>
        )
    }
}

export default Community;