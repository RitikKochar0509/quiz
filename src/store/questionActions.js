import axios from 'axios';




export const fetchQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=15');
      dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: response.data.results });
    } catch (error) {
      dispatch({ type: 'FETCH_QUESTIONS_ERROR', payload: error.message });
    }
  };
};
