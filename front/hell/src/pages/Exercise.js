import React, { Component } from 'react';
import './page.css';
import ExerciseSidebar from '../component/Exercise/ExerciseSidebar';

class Exercise extends Component {
    render() {
        return (
            <div class="Exercise row">
        
                <ExerciseSidebar class="col-2"></ExerciseSidebar>

                <div class="col">카드 리스트</div>
                
            </div>
        )
    }
}

export default Exercise