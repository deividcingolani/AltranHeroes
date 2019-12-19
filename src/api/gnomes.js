import axios from "axios";

const instance = axios.create({
  baseURL: "https://raw.githubusercontent.com/"
});


export default instance;
