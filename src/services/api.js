import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async login(user) {
    const response = await API.post("/auth/local", {
      ...user,
    });
    return response.data;
  },
  async createClient(newClient) {
    const response = await API.post("/clients", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`, // eslint-disable-line
      },
      ...newClient,
    });
    return response.data;
  },
  async getClient(clientId) {
    const response = await API.get("/clients/" + clientId, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`, // eslint-disable-line
      },
    });
    return response.data;
  },
};
