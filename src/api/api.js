import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const fetchCategories = async() => {
  return await (await axios.get(`${BASE_URL}/categories`)).data;
};