import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 97e6ba6c7cef6fae6ab436d73beb68083d42512c687b0e56d42284e42bbb492c"
  }
});
