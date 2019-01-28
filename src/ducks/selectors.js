import { NAMESPACE, defaultState } from '.';
// selectors
const root = state => (state ? state[NAMESPACE] : defaultState);

const getQuestions = state => root(state).questions || defaultState.questions;
const getOutcomes = state => root(state).outcomes || defaultState.outcomes;
const getScore = state => root(state).score || defaultState.score;
const getCurrentQuestion = state =>
  root(state).currentQuestion || defaultState.currentQuestion;
const getInitDone = state => root(state).initDone || defaultState.initDone;
const getSelectedAnswer = state => root(state).answer || defaultState.answer;
const getVerdict = state => root(state).verdict || defaultState.verdict;

export default {
  getQuestions,
  getOutcomes,
  getScore,
  getCurrentQuestion,
  getInitDone,
  getSelectedAnswer,
  getVerdict
};
