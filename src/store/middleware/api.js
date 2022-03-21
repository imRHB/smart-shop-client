import axios from "axios";
import { apiCallBegan, apiCallFailed, apiCallSucceeded } from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    console.log(action);
    if (action.type !== apiCallBegan.type) return next(action);

    const { url, method, data, onSuccess, onError, onStart, onFailed } =
      action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        // baseURL: "https://smart-shop-pos.herokuapp.com",
        baseURL: "http://localhost:5000",
        url,
        method,
        data,
      });

      // General
      dispatch(apiCallSucceeded(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (onFailed) dispatch({ type: onFailed });
      // General
      dispatch(apiCallFailed(error.message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    } finally {
    }
  };

export default api;
