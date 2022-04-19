import * as api from './api.js';

const path = {
    all: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    myItems : (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: '/data/albums',
    like: '/data/likes',
    byId: '/data/albums/',
    delete: '/data/albums/',
    edit: '/data/albums/'
};



export async function create(data) {
    return api.post(path.create, data);
}

export async function getAll(){
    return api.get(path.all);
}

export async function getById(id) {
    return api.get(path.byId + id);
}

export async function getMyItems(userId) {
    return api.get(path.myItems(userId));
}
export async function createItem(data) {
    return api.post(path.create, data);
}
export async function editItem(id, data) {
    return api.put(path.edit + id, data);
}
export async function deleteItem(id) {
    return api.del(path.delete + id);
}



