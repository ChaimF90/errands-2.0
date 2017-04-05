import knex from './config';
import { Errand } from '../interfaces/allInterfaces';

async function addErrand(errand: Errand) : Promise<Errand> {
    let id = await knex('errands').insert(errand);
    let newErrand = await knex('errands').select().where('id', id).first();
    return newErrand;
}

async function deleteErrand(id: number) {
    await knex('errands').where('id', id).del();
    return id;
}

async function updateErrand(errand: Errand) {
    await knex('errands').update(errand).where('id', errand.id);
    return errand;
}

async function getAllErrands(catId: number) {
    let allErrands = await knex('errands').select().where('categoryId', catId);
    return allErrands;
}

export {
    addErrand,
    deleteErrand,
    updateErrand,
    getAllErrands
}








