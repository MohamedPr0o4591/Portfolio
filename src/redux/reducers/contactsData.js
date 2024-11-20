import { types } from "../types/allTypes";

const initial = {
  data: [],
};
export const contactsData = (state = initial, action) => {
  switch (action.type) {
    case types.CONTACTS_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
