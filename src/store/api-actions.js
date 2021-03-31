import {ActionCreator} from "./action";

export const fetchData = () => (dispatch, _getState) => (
  fetch(`https://603e38c548171b0017b2ecf7.mockapi.io/homes`)
	  .then(response => response.json())
	  .then((result) => {
	    dispatch(ActionCreator.getData(result));
	  })
);
