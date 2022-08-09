import { gallery_fail, gallery_request, gallery_success } from "../actionTypes";
import request_api from "../../api";
export const getPhotos = () => async (dispatch) => {
    try {
      dispatch({
        type: gallery_request,
      });
  
      const { data } = await request_api("/gallery/",{
        headers:{
          Authorization: `Client-ID 2a2e04ee7af704f`
        }
      });
  
      dispatch({
        type: gallery_success,
        payload: data
      });
      console.log("data:", data)
    } catch (error) {
      dispatch({
          type: gallery_fail,
          payload:error
      })
      console.log(error);
    }
  };