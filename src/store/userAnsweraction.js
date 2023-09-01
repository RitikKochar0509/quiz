export const saveUserAnswer = (questionIndex, answer) => ({
    type: 'SAVE_USER_ANSWER',
    payload: { questionIndex, answer },
  });