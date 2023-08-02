import axios from "axios";

export default axios.create({
  baseURL: "https://contact.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});