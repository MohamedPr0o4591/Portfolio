import axios from "axios";
import { types } from "../types/allTypes";

export const getAllProjects = (_) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_HOST}/portfolioAdmin/projects/getProjects.php`
      );

      dispatch({
        type: types.GET_ALL_PROJECTS,
        payload: res.data.result,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getAllContactsData = (_) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_HOST}/portfolioAdmin/contact/getData.php`
      );
      dispatch({
        type: types.CONTACTS_DATA,
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getAllAboutManagerData = (_) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_HOST
        }/portfolioAdmin/about_manager/getAllData.php`
      );

      dispatch({
        type: types.ABOUT_MANAGER_DATA,
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getAllInfoData = (_) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_HOST}/portfolioAdmin/info/getInfo.php`
      );
      dispatch({
        type: types.GET_ALL_INFO_DATA,
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
