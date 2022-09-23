import React from 'react';
import './TodoTemplate.scss'
import {HiAnnotation} from 'react-icons/hi';
const TodoTemplate = ({children}) => {


    return(
        <div className={'TodoTemplate'}>
            <HiAnnotation/>
            <div className={'app-title'}>일정관리</div>
            <HiAnnotation/>
            <div className={'content'}>{children}</div>
        </div>

    )
}

export default TodoTemplate;