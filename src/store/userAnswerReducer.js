const initialState = [];

const userAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_ANSWER':
      const { questionIndex, answer } = action.payload;
      const newState = [...state];
      newState[questionIndex] = answer;
      return newState;
      
    default:
      return state;
  }
};

export default userAnswerReducer;
