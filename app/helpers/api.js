function path(route) {
  return "https://personal-backend-kappa.vercel.app/api/" + route;
}

const api = {
  sendMessage: async ({ email, fullname, message }) => {
    const raw = JSON.stringify({ email, fullname, message });
    const response = await fetch(path("message"), {
      method: "POST",
      body: raw,
      headers: { "Content-Type": "application/json" }
    });
    
    const slicedStatus = response.status.toString().slice(0, 2);
    const responseJson = await response.json();
    if (slicedStatus != "20") throw responseJson;
    else return responseJson;
  },
}

export default api;