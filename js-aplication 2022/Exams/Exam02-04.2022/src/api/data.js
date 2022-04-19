import  {get, post, put, del} from '../api/api.js';

import { clearUserData, setUserData, createUserData } from "../helper.js";

const path = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    catalog: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    donation: '/data/donation',
    details: `/data/pets/`,
    byId: `/data/pets/`,
    delete: (id) => `/data/pets/${id}`,
    total: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    own: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function totalDonation (petId) {
    return get(path.total(petId))
}


export async function postDonation (data) {
    return post(path.donation, data)
}

export async function getAll() {
    return get(path.catalog);
}

export async function getCatalog() {
    return get(path.catalog);
}

export async function getById(id) {
    return get(path.byId + id);
}

export async function create(data) {
    return post(path.create, data);
}

export async function details(id) {
    return get(path.details + id);
}

export async function editById(id, data) {
    return put(path.byId + id, data);
}

export async function delItem(id) {
    return del(path.byId + id);
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

