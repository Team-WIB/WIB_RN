import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://ec2-3-39-199-70.ap-northeast-2.compute.amazonaws.com:8080/",
});
