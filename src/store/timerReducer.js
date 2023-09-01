
const initialState = 30 * 60; // 30 minutes in seconds

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TIMER':
      return action.payload;
    default:
      return state;
  }
};

export default timerReducer;
