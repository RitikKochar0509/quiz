import React, { useState } from 'react';
import { Button,Card, Container, Typography, TextField, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '../store/setEmailaction'; // Import the email action
import { fetchQuestions } from '../store/questionActions';
import { motion } from 'framer-motion';

const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation

  const handleStartQuiz = () => {
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);
    dispatch(setEmail(email));
    dispatch(fetchQuestions());
    navigate('/quiz');
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
   
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          gap: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" align="center">
            Welcome to the Quiz!
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card  sx={{ padding: '20px', width: 'auto', borderRadius: '8px' }}>
           
              Test your knowledge with our fun and challenging quiz. Answer questions, earn points, and see how well you
              score!
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TextField
            label="Enter your email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmailValue(e.target.value);
              setIsEmailValid(true); // Reset email validation status when user edits
            }}
            error={!isEmailValid}
            helperText={!isEmailValid ? 'Please enter a valid email address' : ''}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Button variant="contained" color="primary" onClick={handleStartQuiz}>
            Start Quiz
          </Button>
        </motion.div>
      </Box>
  );
};

export default StartPage;
