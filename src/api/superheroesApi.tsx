import axios from 'axios';
import { SuperheroFormData } from '../types/SuperheroTypes';

const superheroApi = axios.create({
  baseURL: 'http://localhost:3000/superheroes',
  headers: { Accept: 'application/json' },
});

export const getSuperheroes = async () => {
  const { data } = await superheroApi.get('');
  return data;
};

export const createSuperhero = async (formData: SuperheroFormData) => {
  await superheroApi.post('', formData);
};
