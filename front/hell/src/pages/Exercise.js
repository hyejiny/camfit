import React, { Component } from 'react';
import './page.css';
import ExerciseSidebar from '../component/Exercise/ExerciseSidebar';
import ExerciseCardlist from '../component/Exercise/ExerciseCardlist';

class Exercise extends Component {
    render() {
        return (
            <div class="Exercise row">
        
                <ExerciseSidebar class="col"></ExerciseSidebar>
                <div class="col">

                    <div class="row">운동하기 메인</div>
                    <ExerciseCardlist></ExerciseCardlist>
                </div>
                
            </div>
        )
    }
}

export default Exercise