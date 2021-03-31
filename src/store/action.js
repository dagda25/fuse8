export const ActionType = {
  GET_DATA: `GET_DATA`,
  FILTER_DATA: `FILTER_DATA`,
};

export const ActionCreator = {
  getData: (data) => ({
    type: ActionType.GET_DATA,
    payload: data
  }),
  filterData: (data) => ({
    type: ActionType.FILTER_DATA,
    payload: data
  }),

};
