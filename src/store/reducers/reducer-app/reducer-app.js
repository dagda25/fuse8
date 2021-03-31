import {ActionType} from "../../action";


const initialState = {
  data: null,
  filterString: null

};


const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case ActionType.FILTER_DATA:
      return Object.assign({}, state, {
        filterString: action.payload,
      });
    default:
      return state;
  }
};

export {reducerApp};
