import knex from './config';
import { User, LoginCreds } from '../interfaces/allInterfaces';
import * as bcrypt from 'bcrypt';

async function createUser(user: User) : Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    let id = await knex('users').insert(user);
    let newUser = await knex('users').select().where('id', id).first();
    return newUser;
}

async function loginUser(payload: LoginCreds) {
    let user = await knex('users')
    .select().where('username', payload.identifier)
    .orWhere('email', payload.identifier).first();
    if(user) {
        let passwordsMatch = await bcrypt.compare(payload.password, user.password);
        if(passwordsMatch) {
            return user;
        }
    }
}


export {
    createUser,
    loginUser
}

