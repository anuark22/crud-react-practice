import React from 'react';
import '../public/css/UserTable.css';

function UserTable(props){
    return(
        <table>
            <thead>
                <tr className="tr">
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map( user =>(
                        <tr key={user.id} className="tr">
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                            <button 
                                className="button"
                                onClick={()=>{props.editRow(user)}}
                            >
                                Edit
                            </button>
                            <button 
                                className="button"
                                onClick={()=>{props.deleteUser(user.id)}}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                    )): (
                        <tr>
                            <td className="no-users">No Users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
export default UserTable;