// actions.js
export const addItem = (item) => {
  return { type: 'ADD_ITEM', payload: item };
};

export const deleteItem = (index) => {
  return { type: 'DELETE_ITEM', payload: index };
};

export const editItem = (index) => {
  return { type: 'EDIT_ITEM', payload: index };
};

export const updateItem = (item) => {
  return { type: 'UPDATE_ITEM', payload: item };
};

export const resetList = () => {
  return { type: 'RESET_LIST' };
};

export const loadData = (data) => {
  console.log('Action Payload:', data);
  return { type: 'LOAD_DATA', payload: data };
};
