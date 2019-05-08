import React, { Component } from 'react';
import UserForm from './UserForm';

class Users extends Component{
    state = {
        users: [],
        single: null
    }
    componentDidMount(){
        this.showAll();
    }
    showAll(){
        fetch('http://localhost:8000/api/users')
        .then(res =>  res.json())
        .then(users => this.setState({users}))
    }
    showSingle(e, id){
        e.preventDefault();
        fetch(`http://localhost:8000/api/users/${id}`)
        .then(res =>  res.json())
        .then(single => this.setState({single}))
    }
    createUser(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/users',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: e.target.name.value, email: e.target.email.value})
        })
        .then(res =>  res.json())
        .then(newUser => this.setState({users: [...this.state.users,newUser]}));
    }
    render(){
        return(
        <section>
            <UserForm onSubmit={(e) => this.createUser(e)} />
            <ul>
                {this.state.users.map(user =>{
                    return <a href={user.id} onClick={(e) => this.showSingle(e, user.id)}>
                        <li>{user.name} / {user.email}</li>
                    </a>
                })}
            </ul>
            {this.state.single && <article>
                <h1>{this.state.single.name}</h1>
                <p>{this.state.single.email}</p>
            </article>}
        </section>
        );
    }
}

export default Users;