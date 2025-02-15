import axios from "axios";
const API_URL = "http://localhost:5000/api";

export const getMenus = () => axios.get(`${API_URL}/menus`);
export const createMenu = (data) => axios.post(`${API_URL}/menus`, data);
export const createMenuItem = (menuId, data) => axios.post(`${API_URL}/menus/${menuId}/items`, data);
