import React, { useState } from 'react';
import './page.css';
import ArticleCreate from '../component/Community/ArticleCreate';
import ArticleSearch from '../component/Community/ArticleSearch';

function Community() {

    const [SearchTerm, setSearchTerm] = useState("")

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    return (
        <div className="Community">
            자유게시판
            <button>
              <a href="/community/create">작성하기</a>
            </button>
            <ArticleSearch
                refreshFunction={updateSearchTerm}
            />
            {/* <ArticleCreate/> */}
        </div>
    )
}


export default Community;