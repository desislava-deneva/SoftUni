import  {get, post, put, del} from './api.js';

import { clearUserData, setUserData, createUserData } from "../helper.js";

const path = {
    all: '/data/cars?sortBy=_createdOn%20desc',
    home: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    ownItems: (id) => `/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
    create: '/data/cars',
    like: '/data/likes',
    byId: '/data/cars/',
    delete: '/data/cars/',
    edit: '/data/cars/',
    comment: '/data/comments',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function getAll() {
    return get(path.all);
}

export async function getHomeData() {
    return get(path.home);
}


export async function getById(id) {
    return get(path.byId + id);
}

export async function create(data) {
    return post(path.create, data);
}

export async function createComment(data) {
    return post(path.comment, data);
}

export async function getOwnItem(id) {
    return get(path.ownItems(id));
}

export async function editById(id, data) {
    return put(path.edit + id, data);
}

export async function delItem(id) {
    return del(path.delete + id);
}

export async function login(username, password) {
    const result = await post(path.login, { username, password });
    setUserData(createUserData(result));
    return result;
}

export async function register(username, password) {
    const result = await post(path.register, { username, password });
    setUserData(createUserData(result));

    return result;
}

export function logout() {
    get(path.logout);
    clearUserData();
}

