import  {get, post, put, del} from '../api/api.js';

import { clearUserData, setUserData, createUserData } from "../helper.js";

const path = {
    all: '/data/games?sortBy=_createdOn%20desc',
    home: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    ownItems: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    getAllLikesOwn: (theaterId, userId)=> `:/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    create: '/data/theaters',
    like: '/data/likes',
    byId: '/data/theaters/',
    delete: '/data/theaters/',
    edit: '/data/theaters/',
    comment: '/data/comments',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function Like(theaterId) {
    const result = await api.post(host + "/data/likes", { theaterId })
    return result
}

export async function getEventLikes(theaterId) {
    const likes = await get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
    return likes
}

export async function isUserLiked(theaterId, userId) {
    const result = await get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    if (result == 0) {
        return false
    } else if (result == 1) {
        return true
    }
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

