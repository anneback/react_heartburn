// action types
const types = {
  getData: 'GET_DATA',
  setScore: 'SET_SCORE',
  setQuestion: 'SET_QUESTION',
  setInitDone: 'SET_INIT_DONE',
};

// actions
const getData = payload => ({
  type: types.getData,
  payload,
});
const setScore = payload => ({
  type: types.setScore,
  payload,
});
const setQuestion = payload => ({
  type: types.setQuestion,
  payload,
});
const setInitDone = () => ({
  type: types.setInitDone,
});
export const actions = { getData, setScore, setQuestion, setInitDone };

const defaultState = {
  currentQuestion: {},
  questions: [],
  outcomes: [],
  score: 0,
  initDone: false,
};

// selectors
const root = state => (state ? state : defaultState);
export const selectors = {
  questions: state => root(state).questions,
  outcomes: state => root(state).outcomes,
  score: state => root(state).score,
  currentQuestion: state => root(state).currentQuestion,
  initDone: state => root(state).initDone,
};

// reducer
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.getData:
      return { ...state, ...action.payload };
    case types.setQuestion:
      return { ...state, currentQuestion: action.payload };
    case types.setScore:
      return { ...state, score: action.payload };
    case types.setInitDone:
      return { ...state, initDone: true };
    default:
      return state;
  }
};

export default { actions, reducer, selectors };
