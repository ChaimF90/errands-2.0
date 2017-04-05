import * as React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
    return (
        <div className="jumbotron">
            <h1>Welcome to the errand tracker app!</h1>
            <Link to='/register' className="btn btn-primary">Create Account</Link>
            <Link to='/login' className="btn btn-primary">Login</Link>
        </div>
    )
}