import { types } from "../types/allTypes";

const initial = {
  data: [],
};
export const infoDataReducer = (state = initial, action) => {
  switch (action.type) {
    case types.GET_ALL_INFO_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
