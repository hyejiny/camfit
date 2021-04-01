import React, { useState } from 'react';
import './page.css';
import ArticleCreate from '../component/Community/ArticleCreate';
import FileCreate from '../component/Community/FileCreate';
import ArticleSearch from '../component/Community/ArticleSearch';

function Community() {

    const [SearchTerm, setSearchTerm] = useState("")

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    return (
        <div className="Community">
            자유게시판
            <ArticleSearch
                refreshFunction={updateSearchTerm}
            />
            <ArticleCreate/>
            <FileCreate/>
        </div>
    )
}


export default Community;