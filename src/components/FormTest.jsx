import React, { useState, Fragment } from 'react';
import '../public/css/FormTest.css';
import UserTable from './UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

function FormTest (){

    const usersData = [
        { id: uuidv4(), name: 'Anuar', username: 'extremepoke' },
        { id: uuidv4(), name: 'Alexis', username: 'dranned' },
        { id: uuidv4(), name: 'Jose', username: 'guaroland' },
        { id: uuidv4(), name: 'Roman', username: 'marronguitar' },
        { id: uuidv4(), name: 'Ademar', username: 'metanfetamina' },
        { id: uuidv4(), name: 'Gregorio', username: 'hystericfurry' },
    ]
    //State
    const [users, setUsers] = useState(usersData);
    //Add User
    const addUser = (user) => {
        user.id = uuidv4();
        setUsers([
            ...users,
            user
        ])
    }
    //Delete an User
    const deleteUser = (id) => {
        const filteredArray = users.filter( user => user.id !== id );
        setUsers(filteredArray);
    }
    //Edit Users
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: '',
        name: '',
        username: '',
    });
    const editRow = (user) =>{
        setEditing(true);
        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username,
        })
    }
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers( users.map( user => ( user.id === id ? updatedUser : user)))
    }
    return(
        <div className="form-container">
            <h1 className="tittle">CRUD test form</h1>
            <div className="child-container">
                <div className="user-add">
                    { 
                        editing ? (
                            <Fragment>
                                <h2 className="tittle-table">Edit User</h2>
                                <EditUserForm 
                                    currentUser={currentUser}
                                    updateUser={updateUser} 
                                />
                            </Fragment>
                        ):(
                            <Fragment>
                                <h2 className="tittle-table">Add User</h2>
                                <AddUserForm addUser={addUser} />
                            </Fragment>
                        )
                    }
                </div>
                <div className="user-remove">
                    <h2 className="tittle-table">View Users</h2>
                    <UserTable 
                        users={users} 
                        deleteUser={deleteUser} 
                        setEditing={setEditing} 
                        editRow={editRow}
                    />
                </div>
            </div>
        </div>
    );
}
export default FormTest;