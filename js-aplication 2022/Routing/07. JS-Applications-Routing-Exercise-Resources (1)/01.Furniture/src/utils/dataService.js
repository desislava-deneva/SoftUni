import * as api from "./apiService.js";

api.settings.baseUrl = "http://localhost:3030";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

//app specific requests below
export async function getAllFurniture() {
  return await api.get(`${api.settings.baseUrl}/data/catalog`);
}

export async function getSpecific(id) {
  return await api.get(`${api.settings.baseUrl}/data/catalog/${id}`);
}

export async function getUserItems() {
  return await api.get(
    `${api.settings.baseUrl}/data/catalog?where=_ownerId%3D%22${localStorage.getItem("userId")}%22`
  );
}

export async function createItem(data) {
  if (localStorage.getItem("authToken") === null) {
    return "/login";
  }
  return await api.post(`${api.settings.baseUrl}/data/catalog`, data);
}

export async function delItem(id) {
  return await api.del(`${api.settings.baseUrl}/data/catalog/${id}`);
}

export async function editItem(id, data) {
  return await api.put(`${api.settings.baseUrl}/data/catalog/${id}`, data);
}
