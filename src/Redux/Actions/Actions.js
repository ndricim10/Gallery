import { gallery_fail, gallery_request, gallery_success } from "../actionTypes";
import request from '../../api'

export const getPhotos = () => async (dispatch) => {
    try {
      dispatch({
        type: gallery_request,
      });
  
      const { data } = await request("/gallery",
      {params:{
        sort: "user",
      }});
  
      dispatch({
        type: gallery_success,
        payload: data
      });
      console.log(data)
    } catch (error) {
      dispatch({
          type: gallery_fail,
          payload:error
      })
      console.log(error);
    }
  };