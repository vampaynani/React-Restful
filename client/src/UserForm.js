import React from 'react';

export default function UserForm(props){
    return <form onSubmit={props.onSubmit}>
        <input type="text" name="name"/>
        <input type="text" name="email" />
        <button>Create</button>
    </form>
}