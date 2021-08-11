import axios from "axios";
import { API_URL } from "./../constants/ApiUrl";

const ListProductService = {
  fetchListProduct: () => {
    return axios({
      method: "GET",
      url: API_URL,
      data: {},
    });
  },
};
export default ListProductService;
