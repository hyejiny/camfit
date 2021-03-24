import React, { Component } from 'react';
import './page.css';
import ExerciseSidebar from '../component/Exercise/ExerciseSidebar';
import ExerciseCardlist from '../component/Exercise/ExerciseCardlist';

class Exercise extends Component {
    render() {
        return (
            <div className="Exercise row">
        
                <ExerciseSidebar className="col"></ExerciseSidebar>
                <div className="col" sytle="boder-sytle:dotted; border-radius:3px; border-color:black;">

                    
                    <div className="ExerciseHead">운동하기 메인</div>
                    <ExerciseCardlist></ExerciseCardlist>
                    
                </div>
                
            </div>
        )
    }
}

export default Exercise