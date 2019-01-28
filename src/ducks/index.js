import actions from './actions';
import selectors from './selectors';

export const NAMESPACE = 'HEARTBURN';
// action types
export const types = {
  getData: 'GET_DATA',
  resetAnswer: 'RESET_ANSWER',
  setScore: 'SET_SCORE',
  setQuestion: 'SET_QUESTION',
  setAnswer: 'SET_ANSWER',
  setInitDone: 'SET_INIT_DONE',
  setVerdict: 'SET_VERDICT',
  resetVerdict: 'RESET_VERDICT',
  resetQuestion: 'RESET_QUESTION'
};

export const defaultState = {
  currentQuestion: {},
  questions: [],
  outcomes: [],
  score: 0,
  initDone: false,
  answer: {},
  verdict: {}
};

// reducer
const rootReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.getData:
      return { ...state, ...payload };
    case types.setQuestion:
      return { ...state, currentQuestion: payload };
    case types.setScore:
      return { ...state, score: payload };
    case types.setInitDone:
      return { ...state, initDone: true };
    case types.setAnswer:
      return { ...state, answer: payload };
    case types.resetAnswer:
      return { ...state, answer: defaultState.answer };
    case types.setVerdict:
      return { ...state, verdict: payload };
    case types.resetVerdict:
      return { ...state, verdict: defaultState.verdict };
    case types.resetQuestion:
      return { ...state, verdict: defaultState.currentQuestion };
    default:
      return state;
  }
};

const reducer = { [NAMESPACE]: rootReducer };

export default { actions, reducer, selectors };
