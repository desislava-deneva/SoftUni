import  {get, post, put, del} from './api.js';

import { clearUserData, setUserData, createUserData } from "../../helper.js";

const path = {
    all: '/data/books?sortBy=_createdOn%20desc',
    home: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    ownItems: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    getAllLikesOwn: (theaterId)=> `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    create: '/data/books',
    like: '/data/likes',
    byId: '/data/books/',
    delete: '/data/books/',
    edit: '/data/books/',
    comment: '/data/comments',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function ownLikes(id) {
    return post(path.getAllLikesOwn(id));
}

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

export async function login(email, password) {
    const result = await post(path.login, { email, password });
    setUserData(createUserData(result));
    return result;
}

export async function register(email, password) {
    const result = await post(path.register, { email, password });
    setUserData(createUserData(result));

    return result;
}

export function logout() {
    get(path.logout);
    clearUserData();
}

