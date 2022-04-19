export const settings = {
  baseUrl: "",
};

async function askServer(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      let res = await response.json();
      throw new Error(res.message);
    }

    try {
      let data = await response.json();
      return data;
    } catch (err) {
      return response;
    }
  } catch (err) {
    // alert(err.message);
    throw err;
  }
}

function getOptions(method = "get", body) {
  const options = {
    method: method.toLowerCase(),
    headers: {},
  };

  const token = localStorage.getItem("authToken");
  if (token !== null) {
    options.headers["X-Authorization"] = token;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  // console.log(options);
  return options;
}

export async function get(url) {
  return await askServer(url, getOptions());
}

export async function post(url, data) {
  return await askServer(url, getOptions("post", data));
}

export async function put(url, data) {
  return await askServer(url, getOptions("put", data));
}

export async function del(url) {
  return await askServer(url, getOptions("delete"));
}

export async function login(email, password) {
  const result = await post(`${settings.baseUrl}/users/login`, { email, password });
  localStorage.setItem("email", result.email);
  localStorage.setItem("authToken", result.accessToken);
  localStorage.setItem("userId", result._id);
  return result;
}

export async function register(email, password) {
  const result = await post(`${settings.baseUrl}/users/register`, { email, password });
  localStorage.setItem("email", result.email);
  localStorage.setItem("authToken", result.accessToken);
  localStorage.setItem("userId", result._id);
  return result;
}

export async function logout() {
  const result = await get(`${settings.baseUrl}/users/logout`);
  localStorage.removeItem("email");
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
  return result;
}
