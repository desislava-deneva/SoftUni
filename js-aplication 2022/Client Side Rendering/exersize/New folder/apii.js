export async function askServer(url, method = "get", body, skipReply, isLogged) {
    method = method.toLowerCase();
    const headers = {};
  
    if (typeof body === "object") {
      body = JSON.stringify(body);
      headers["Content-Type"] = "application/json";
    }
  
    if (isLogged) {
      headers["X-Authorization"] = getUserToken();
    }
  
    let answer = await fetch(url, { headers, method, body });
  
    if (!answer.ok) {
      let res = await answer.json();
      throw new Error(JSON.stringify(res));
    }
  
    if (skipReply) {
      return await answer.json();
    }
  
    return answer;
  }