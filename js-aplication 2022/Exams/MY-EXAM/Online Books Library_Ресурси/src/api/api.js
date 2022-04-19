import { clearUserData, getUserData } from "../helper.js";

const url = "http://localhost:3030";


async function request(path, options) {
  try {

    const response = await fetch(`${url}${path}`, options);

    if (!(response.ok == true)) {
      if (response.status == 403) {
        clearUserData();
      }

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

function createOptions(method = "get", data) {
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

export async function get(path) {
  return request(path, createOptions());
}

export async function post(path, data) {
  return request(path, createOptions('post', data));
}

export async function put(path, data) {
  return request(path, createOptions('put', data));
}

export async function del(path) {
  return request(path, createOptions('delete'));
}


