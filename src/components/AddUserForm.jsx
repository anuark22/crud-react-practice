import React from 'react';
import '../public/css/AddUserForm.css';
import { useForm } from 'react-hook-form';

function AddUserForm(props){
    
    const { register, errors, handleSubmit } = useForm();
    
    const onSubmit = (data, e) => {
        props.addUser(data);
        //Limpiar Datos
        e.target.reset();
    }
    return(
        <form className="add-user-form" onSubmit={handleSubmit(onSubmit)} >
            <div className="add-form-name">
                <h2>Name</h2>
                <input type="text" name="name" ref={
                    register({
                        required: { value: true, message:'Campo Requerido' }
                    })
                }/>
                <div className="error-message">
                    {errors?.name?.message}
                </div>
            </div>
            <div className="add-form-user-name">
                <h2>Username</h2>
                <input type="text" name="username" ref={
                    register({
                        required: { value: true, message:'Campo Requerido' }
                    })
                }/>
                <div className="error-message">
                    {errors?.username?.message}
                </div>
            </div> 
            <button className="btn-btn">Add new user</button>
      </form>
    );
}
export default AddUserForm;