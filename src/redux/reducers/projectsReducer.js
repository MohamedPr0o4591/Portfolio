import { types } from "../types/allTypes";

const initial = {
  projects: [],
};
export const projectsReducer = (state = initial, action) => {
  switch (action.type) {
    case types.GET_ALL_PROJECTS:
      return {
        projects: action.payload,
      };
    default:
      return state;
  }
};
