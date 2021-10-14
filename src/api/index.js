import axios from "axios";
//mock API
let API_URL = "https://6098f0d799011f001713fbf3.mockapi.io";
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body
  }).catch((err) => {
    console.log(err);
  });
}
