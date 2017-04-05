import * as React from 'react';
import { RegisterPageProps } from '../interfaces/frontendInterfaces';

export default function Form(props: RegisterPageProps) {
    return (
        <div className="container">
            <input
            value={props.user.firstName}
            onChange={props.change}
            name="firstName" 
            type="text" 
            placeholder="First Name" 
            className="form-control" />
            <br />
            <input 
            value={props.user.lastName}
            onChange={props.change}
            name="lastName"
            type="text" 
            placeholder="last Name" 
            className="form-control" />
            <br />
            <input 
            value={props.user.username}
            onChange={props.change}
            name="username"
            type="text" 
            placeholder="Username" 
            className="form-control" />
            <br />
            <input 
            value={props.user.email}
            onChange={props.change}
            name="email"
            type="text" 
            placeholder="Email" 
            className="form-control" />
            <br />
            <input 
            value={props.user.password}
            onChange={props.change}
            name="password"
            type="password" 
            placeholder="password" 
            className="form-control" />
            <br />
            <button onClick={props.submit} className="btn btn-success">Submit</button>
        </div>
    )
}