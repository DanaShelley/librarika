import axios from "axios";

export default axios.create({
    baseURL: "https://librarika.herokuapp.com/api/",
    responseType: "application/json"
});