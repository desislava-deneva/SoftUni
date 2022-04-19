import * as api from './api.js';

const endpoints = {
    all: '/data/books?sortBy=_createdOn%20desc',
    myItems : (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: '/data/books',
    like: '/data/likes',
    byId: '/data/books/',
    delete: '/data/books/',
    edit: '/data/books/'
};



export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getAll(){
    return api.get(endpoints.all);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId) {
    return api.get(endpoints.myItems(userId));
}
export async function createItem(data) {
    return api.post(endpoints.create, data);
}
export async function editItem(id, data) {
    return api.put(endpoints.edit + id, data);
}
export async function deleteItem(id) {
    return api.del(endpoints.delete + id);
}

