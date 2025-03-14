import { createContext, useContext, useReducer } from 'react';

const Start = createContext();
const initialState = {
  start: false,
  finish: false,
  general: [],
  type: null,
  index: 0,
  isLoading: false,
  generalScore: 0,
  generalQuestionOrder: [],
  generalQuestionUserAnswer: {},
};
function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'finishedLoading':
      return { ...state, isLoading: false };
    case 'general':
      return { ...state, general: action.payload };
    case 'select':
      return { ...state, start: true, type: action.payload };
    case 'answered':
      return {
        ...state,
        generalScore:
          action.payload.option === action.payload.correctAnswer
            ? state.generalScore + 1
            : state.generalScore,
        generalQuestionUserAnswer: {
          ...state.generalQuestionUserAnswer,
          [action.payload.index]: {
            selected: action.payload.option,
            isCorrect: action.payload.option === action.payload.correctAnswer,
            hasAnswered: true,
          },
        },
      };
    case 'nextQuestion': {
      const questionLimit = state.index < state.general.length - 1;
      return {
        ...state,
        finish: questionLimit ? state.finish : true,
        start: questionLimit ? state.start : false,
        index: questionLimit ? state.index + 1 : state.index,
      };
    }
    case 'previousQuestion':
      return {
        ...state,
        index: state.index < 1 ? state.index : state.index - 1,
      };
    case 'setShuffled': {
      const { index, options } = action.payload;
      const newOrder = [...state.generalQuestionOrder];
      newOrder[index] = options;
      return {
        ...state,
        generalQuestionOrder: newOrder,
      };
    }
    default:
      throw new Error('Unknown Action');
  }
}
function StartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Start.Provider value={value}>{children}</Start.Provider>;
}
function useReducerContext() {
  if (useContext(Start) === undefined) throw new Error('used out of context');
  return useContext(Start);
}
export { useReducerContext, StartContext };
