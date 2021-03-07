import React from 'react';
import '../public/css/AddUserForm.css';
import { useForm } from 'react-hook-form';

function EditUserForm(props){
   
    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });
    setValue( 'name', props.currentUser.name);
    setValue( 'username', props.currentUser.username);
    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);
        
        //Clear inputs
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
            <button className="btn-btn">Edit user</button>
      </form>
    );
}
export default EditUserForm;