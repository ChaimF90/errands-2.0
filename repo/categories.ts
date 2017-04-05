import knex from './config';
import { Category } from '../interfaces/allInterfaces';

async function addCategory(cat: Category) : Promise<Category> {
    let id = await knex('categories').insert(cat);
    let newCat = await knex('categories').select().where('id', id).first();
    return newCat;
}

async function deleteCategory(id: number) {
    await knex('categories').where('id', id).del();
    return id;
}

async function updateCategory(cat: Category) {
    await knex('categories').update(cat).where('id', cat.id);
    return cat;
}

async function getAllCategories(userId: number) {
    let allCategories = await knex('categories').select().where('userId', userId);
    return allCategories;
}


export {
    addCategory,
    deleteCategory,
    updateCategory,
    getAllCategories
}








