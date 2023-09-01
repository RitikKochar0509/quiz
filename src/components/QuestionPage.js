import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTimer } from '../store/timerAction'; 
import { fetchQuestions } from '../store/questionActions';
import { Container,Card, Box,Typography, Radio, FormControlLabel, RadioGroup, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SidePanel from './SidePanel';

const QuizPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const userAnswers = useSelector(state => state.userAnswers);
  const timer = useSelector(state => state.timer);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(userAnswers[currentQuestionIndex]);
  const currentQuestion = questions[currentQuestionIndex];

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    saveUserAnswer();
    if (currentQuestionIndex === questions.length - 1) {
      navigate('/quiz-report');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      saveUserAnswer();
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1] || '');
    }
  };

  const saveUserAnswer = () => {
    dispatch({
      type: 'SAVE_USER_ANSWER',
      payload: { questionIndex: currentQuestionIndex, answer: selectedAnswer }
    });
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        dispatch(updateTimer(timer - 1));
      } else {
        clearInterval(interval);
        navigate('/quiz-report');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, timer]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
console.log(userAnswers,currentQuestionIndex,userAnswers[currentQuestionIndex])
  return (
    <Container maxWidth="md" sx = {{mt:10}}>
      <Card sx = {{py:5,px:3,borderRadius:'5px'}}>      
        
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Question Page
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Time Remaining: {formatTime(timer)}
        </Typography>
        <Box sx = {{display:['none','none','flex']}}>
        <SidePanel saveUserAnswer = {saveUserAnswer} questions={questions} userAnswers={userAnswers} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex = {setCurrentQuestionIndex}/>
        </Box>
        <div>
          {currentQuestion ? (
            <div>
              <Typography sx = {{fontSize:'16px',fontWeight:600,color:'#475467'}}>
                Question {currentQuestionIndex + 1}:  {currentQuestion.question}
              </Typography>
              <RadioGroup
                aria-label="answer"
                name="answer"
                value={userAnswers[currentQuestionIndex]}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              >
                {currentQuestion.incorrect_answers.map((choice, index) => (
                  <FormControlLabel
                    key={index}
                    value={choice}
                    control={<Radio />}
                    label={choice}
                  />
                ))}
                <FormControlLabel
                  value={currentQuestion.correct_answer}
                  control={<Radio />}
                  label={currentQuestion.correct_answer}
                />
              </RadioGroup>
                  
              <Button sx = {{display:currentQuestionIndex>0 ? 'inline-block' :'none' ,mr:2}} variant="contained" color="primary" onClick={handlePrevQuestion}>
                Prev
              </Button>
              <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <CircularProgress />
            </div>
          )}
        </div>
      </motion.div>
      </Card>
    </Container>
  );
};

export default QuizPage;
