import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
    }
    render(){
        return <div>
            <form onSubmit = {this.handleSubmit}>
                username: <input onChange = {this.handleChange} type="text" name="username"/><br/>
                password: <input onChange = {this.handleChange} type="password" name="password"/><br/><br/>
                <input type="submit"/>
            </form>
        </div>
    }
}

export default LoginForm;