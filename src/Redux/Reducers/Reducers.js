import { gallery_fail, gallery_request, gallery_success } from "../actionTypes";

export const getGallery = (
    state = {
      loading: false,
      gallery: null,
    },
    action
  ) => {
    const { payload, type } = action;
  
    switch (type) {
      case gallery_request:
        return {
          ...state,
          loading: true,
        };
  
      case gallery_success:
        return {
          ...state,
          loading: false,
          gallery: payload,
        };
  
      case gallery_fail:
        return {
          ...state,
          loading: false,
          gallery: null,
          error: payload,
        };
      default:
        return state;
    }
  };