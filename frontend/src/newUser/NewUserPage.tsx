import * as React from 'react';
import { RegisterPageState } from '../interfaces/frontendInterfaces';
import Form from './Form';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class RegisterPage extends React.Component<any, RegisterPageState> {
    constructor() {
        super();
        this.state = {
            user: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '' 
            },
            accountCreated: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeHandler(e: any) {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    async submit() {
        await axios.post('/auth/users/newUser', this.state.user);
    }

    render() {
        return (
            <Form 
            submit={this.submit}
            change={this.changeHandler}
            user={this.state.user} />
        )
    }
}