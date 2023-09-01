const initialState = {
    questions: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_QUESTIONS_SUCCESS':
        return { ...state, questions: action.payload, error: null };
      case 'FETCH_QUESTIONS_ERROR':
        return { ...state, error: action.payload };
        
      default:
        return state;
    }
  };
  
  export default reducer;
  