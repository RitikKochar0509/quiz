import React from 'react';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import StartPage from './components/StartPage';
import QuestionPage from './components/QuestionPage';
import QuizReport from './components/QuizReport';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
          <Route path="/" element = {<StartPage/>} />
          <Route path="/quiz" element={<QuestionPage/>} />
          <Route path="/quiz-report" element={<QuizReport/>} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
