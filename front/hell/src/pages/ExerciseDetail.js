import React, { Component } from 'react';
import ExerciseSidebar from '../component/Exercise/ExerciseSidebar';

import './page.css';

class ExerciseDetail extends Component {
    render() {
        return (
            <div className="Exercise row">
                <ExerciseSidebar class="col"></ExerciseSidebar>
                <div className="col">

                    <h1 className="ExerciseHead">운동하기 디테일 페이지</h1>
                    <image>이미지</image>
                </div>

            </div>
        )
    }
}

export default ExerciseDetail