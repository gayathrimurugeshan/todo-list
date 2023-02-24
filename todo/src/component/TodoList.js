import React,{useState} from 'react';
import CreateTask from '../modals/CreateTask';

const TodoList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(modal);


    }


    return (
        <>
            <div className='header text-center'>
            <h3> Todo List</h3>
            <button className = 'btn btn-primary' onClick={ () => setModal(true)}>create</button>
            </div>
            <CreateTask toggle = {toggle} model = {modal}/>

        </>
    );
};

export default TodoList;