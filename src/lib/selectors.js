import includes from 'lodash/includes';

export const getActionsByIds = (actions, ids) => {
  return actions.reduce((acc, currentValue) => {
    includes(ids, currentValue.id) && acc.push(currentValue.name);
    return acc;
  }, []);
};
