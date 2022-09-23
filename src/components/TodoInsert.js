import React, {useCallback, useState} from 'react';
import './TodoInsert.scss'
import {MdArchive} from 'react-icons/md';

const TodoInsert = ({onInsert, onIns}) => {
    const [id, text] = onIns;
    console.log("aaaaaaaaaa", id);

    const [value, setValue] = useState(text);

    const onChange = useCallback( e => {
        console.log("-----", e.target.value);
            setValue(e.target.value);
    },[]);

    const onSubmit = useCallback( e => {
        onInsert(value);
        setValue('');
        e.preventDefault();

        },[onInsert, value]
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value}
                   onChange={onChange}/>
            <button type="submit">
                <MdArchive/>
            </button>
        </form>
    );
};

export default TodoInsert;