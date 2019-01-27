import api from '../api/response.json';

// action types
const types = {
  getData: 'GET_DATA',
  setScore: 'SET_SCORE',
};

// actions
const getData = () => ({
  type: types.getData,
  api,
});
const setScore = payload => ({
  type: types.setScore,
  payload,
});

export const actions = { getData, setScore };

const defaultState = {
  questions: [],
  outcomes: [],
  score: 0,
};

// selectors
const root = state => (state ? state : defaultState);
export const selectors = {
  questions: state => root(state).questions || defaultState.questions,
  outcomes: state => root(state).outcomes || defaultState.outcomes,
  score: state => root(state).score || defaultState.score,
};

// reducer
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.getData:
      return { ...state, ...action.api };
    case types.setScore:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

export default { actions, reducer, selectors };
