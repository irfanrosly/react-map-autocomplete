import axios from "axios";

function httRequest(url) {
  return axios.request({
    method: "get",
    url: url,
  });
}

export default httRequest;
