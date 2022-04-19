import { clearUserData, getUserData, setUserData } from "../utils/util.js";
const url = "http://localhost:3030";
async function request(endpoint, options) {
  try {
    const response = await fetch(`${url}${endpoint}`, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return response;
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

function createOptions(method = "GET", data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const userData = getUserData();
  if (userData) {
    options.headers["X-Authorization"] = userData.token;
  }

  return options;
}

export async function get(endpoint) {
  return request(endpoint, createOptions());
}

export async function post(endpoint, data) {
  return request(endpoint, createOptions('POST', data));
}

export async function put(endpoint, data) {
  return request(endpoint, createOptions('PUT', data));
}

export async function del(endpoint) {
  return request(endpoint, createOptions('DELETE'));
}

export async function login(email, password) {
  const result = await post("/users/login", { email, password });
  const userData = {
    email: result.email,
    id: result._id,
    token: result.accessToken,
  };
  setUserData(userData);
}

export async function register(email, password) {
  const result = await post("/users/register", { email, password });
  console.log(result);
  const userData = {
    email: result.email,
    id: result._id,
    token: result.accessToken,
  };
  setUserData(userData);
}

export async function logout() {
  await get("/users/logout");
  clearUserData();
}
