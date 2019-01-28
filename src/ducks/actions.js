import { types } from '.';
// actions
const getData = payload => ({
  type: types.getData,
  payload
});
const setScore = payload => ({
  type: types.setScore,
  payload
});
const setQuestion = payload => ({
  type: types.setQuestion,
  payload
});
const resetQuestion = () => ({
  type: types.resetQuestion
});
const setAnswer = payload => ({
  type: types.setAnswer,
  payload
});
const resetAnswer = () => ({
  type: types.resetAnswer
});
const setInitDone = () => ({
  type: types.setInitDone
});
const setVerdict = payload => ({
  type: types.setVerdict,
  payload
});
const resetVerdict = () => ({
  type: types.resetVerdict
});
export default {
  getData,
  setScore,
  resetAnswer,
  setAnswer,
  setQuestion,
  setInitDone,
  setVerdict,
  resetVerdict,
  resetQuestion
};
