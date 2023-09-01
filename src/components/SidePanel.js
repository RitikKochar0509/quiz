import React from 'react';
import { List, ListItem, ListItemText, Drawer, Badge, ListItemButton } from '@mui/material';

const SidePanel = ({setCurrentQuestionIndex,saveUserAnswer, questions,setCurrentQuestion, currentQuestionIndex, onSelectQuestion, userAnswers }) => {
  return (
    <Drawer PaperProps={{

      sx: {
        width: '12%'
      }
    }} variant="permanent" anchor="left">
      <List>
        {questions.map((question, index) => (
          <ListItem key={index} onClick={()=>{
            setCurrentQuestionIndex(index)
            saveUserAnswer()
            }} >
               <Badge
              badgeContent={userAnswers[index] ? 'Answered' : userAnswers[index]==='' ? 'visited': ''}
              color={userAnswers[index] ? 'primary' : userAnswers[index]===''?'secondary': 'default'}
            >
              <ListItemButton  sx = {{width:'100%', color:currentQuestionIndex===index ? 'red':'blue', borderRadius:'10px',backgroundColor:'#F2F4F7'}}>
           
              <ListItemText primary={`Question ${index + 1}`} />
            </ListItemButton>
            </Badge>
          
          </ListItem>
          
        ))}
      </List>
    </Drawer>
  );
};

export default SidePanel;
