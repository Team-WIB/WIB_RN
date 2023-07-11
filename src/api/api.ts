import { useQuery } from "react-query";
import { apiClient } from "../util/apiClient";

export const fetchList = async () => {
  const { data } = await apiClient.get("/questions");
  return data;
};

export const fetchListItem = async (id: number) => {
  const { data } = await apiClient.get(`/questions/${id}`);
  return data;
};
