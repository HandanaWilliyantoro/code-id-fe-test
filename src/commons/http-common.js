import axios from "axios";

export default axios.create({
  baseURL: "https://contact.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json'
  }
});