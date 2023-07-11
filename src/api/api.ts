import { useMutation } from 'react-query';
import { DetailItemType } from '../types/Detail';
import { apiClient } from '../util/apiClient';

export const fetchList = async () => {
  const { data } = await apiClient.get('/questions');
  return data;
};

export const fetchListItem = async (id: number) => {
  const { data } = await apiClient.get(`/questions/${id}`);
  return data;
};

const fetchAddSuperHero = (hero: DetailItemType) => {
  return apiClient.post('/questions', hero);
};

export const useAddSuperHeroMutation = () => {
  return useMutation(fetchAddSuperHero);
};
