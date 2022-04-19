import * as api from './api.js';

const endpoints = {
    all: '/data/games?sortBy=_createdOn%20desc',
    lastItems : `/data/games?sortBy=_createdOn%20desc&distinct=category`,
    create: '/data/games',
    like: '/data/games',
    byId: '/data/games/',
    delete: '/data/games/',
    edit: '/data/games/'
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

export async function getMyItems() {
    return api.get(endpoints.lastItems());
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



