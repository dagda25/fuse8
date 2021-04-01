import {ActionCreator} from "./action";

export const fetchData = () => (dispatch, _getState) => (
  fetch(`https://603e38c548171b0017b2ecf7.mockapi.io/homes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((result) => {
      dispatch(ActionCreator.getData(result));
    })
    .catch(() => {
      throw new Error();
    })

);
