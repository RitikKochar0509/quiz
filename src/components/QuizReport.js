import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Paper } from '@mui/material';

const QuizReportPage = () => {
  const questions = useSelector(state => state.questions.questions);
  const userAnswers = useSelector(state => state.userAnswers);
  const email = useSelector(state => state.email.email);
  return (
    <Container maxWidth="md" sx  ={{mt:10}}>
      <Typography variant="h4" align="center" gutterBottom>
      Hi {email || '--'}, This is your Quiz Report !!
      </Typography>
      {questions.map((question, index) => (
        <Paper key={index} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Question {index + 1}: {question.question}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your Answer: {userAnswers[index] || 'Not answered'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Correct Answer: {question.correct_answer}
          </Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default QuizReportPage;
