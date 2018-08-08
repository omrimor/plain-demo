import data from './data.json';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

export const getAllData = async (time = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(data), time));

export const getResources = async (name = '') => {
  const { resources } = await getAllData();
  return filter(resources, value => includes(value.name, name) && value);
};

export const getActions = async () => {
  const { actions } = await getAllData();
  return actions;
};

