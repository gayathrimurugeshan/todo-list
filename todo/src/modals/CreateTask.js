import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle}) => {
    const [taskNane, setTaskName] =useState('');
    const [description, setDescription] =useState('');
    const handleChange = (e) => {
      

    }
        return (
        <div>
             <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Creat Task</ModalHeader>
        <ModalBody>
       
        </ModalBody>
        <form>
          <div className='form-group'>
          <label>Task Name</label>
            <input className='form-control' type="text"  value={taskNane} onChange = {handleChange}/>
            

          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea  rows = "5" className='form-control' value={description} onChange = {handleChange} >

            </textarea>
            
          </div>
        </form>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      
            
        </div>
    );
};

export default CreateTaskPopup;