import axios from "axios";

export default {
  login: (data: LoginInterface | void) =>
    axios.post("http://localhost:8000/users/login", data),
};
