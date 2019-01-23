import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
