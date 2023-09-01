
import { configureStore } from '@reduxjs/toolkit';
import userAnswerReducer from './userAnswerReducer';
import questionReducer from './questionReducers';
import timerReducer from './timerReducer';
import emailReducer from './emailReducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    userAnswers: userAnswerReducer,
    questions: questionReducer,
    timer:timerReducer,
    email: emailReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
