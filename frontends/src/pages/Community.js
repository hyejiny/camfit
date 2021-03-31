import React, { Component } from 'react';
import './page.css';
import CommunityCreate from '../component/Community/CommunityCreate';
import FileUpload from '../component/utils/FileUpload';


class Community extends Component {
    render() {
        return (
            <div className="Community">
                자유게시판
                <CommunityCreate/>
            </div>
        )
    }
}

export default Community;