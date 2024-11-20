import { combineReducers } from "redux";
import { projectsReducer } from "./projectsReducer";
import { contactsData } from "./contactsData";
import { aboutManager } from "./aboutManagerData";
import { infoDataReducer } from "./infoData";

export const rootReducer = combineReducers({
  GET_PROJECTS: projectsReducer,
  CONTACTS_DATA: contactsData,
  ABOUT_MANAGER_DATA: aboutManager,
  GET_ALL_INFO_DATA: infoDataReducer,
});
