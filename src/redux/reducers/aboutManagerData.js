import { types } from "../types/allTypes";

const initial = {
  result: [],
};

export const aboutManager = (state = initial, action) => {
  switch (action.type) {
    case types.ABOUT_MANAGER_DATA:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
