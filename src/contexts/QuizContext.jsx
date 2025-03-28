import { createContext, useContext, useReducer } from "react";
const getQuestions = (type) => {
  try {
    const stored = localStorage.getItem(type);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error(`Error parsing localStorage '${type}':`, error);
    return [];
  }
};

const QuizContext = createContext();

const initialState = {
  index: 0,
  type: null,
  error: "",
  start: false, // unused state
  finish: false, // unused state
  isLoading: false,

  general: {
    questions: getQuestions("general"),
    score: 0,
    storedOptions: [],
    userAnswers: {},
  },
  mathematics: {
    questions: getQuestions("mathematics"),
    score: 0,
    storedOptions: [],
    userAnswers: {},
  },
  nature: {
    questions: getQuestions("nature"),
    score: 0,
    storedOptions: [],
    userAnswers: {},
  },
  sports: {
    questions: getQuestions("sports"),
    score: 0,
    storedOptions: [],
    userAnswers: {},
  },
  random: {
    questions: getQuestions("random"),
    score: 0,
    storedOptions: [],
    userAnswers: {},
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "", type: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case `${state.type}/questions`:
      return {
        ...state,
        isLoading: false,
        [state.type]: { ...state[state.type], questions: action.payload },
      };

    case "quiz/select": // when questions get selected
      return {
        ...state,
        start: true,
        finish: false,
        index: 0,
        type: action.payload,
      };
    case "question/answered": {
      // when an option is picked
      const questionType = action.payload.type;
      const addScore =
        action.payload.option === action.payload.correctAnswer
          ? state[questionType].score + 1
          : state[questionType].score;
      return {
        ...state,
        [questionType]: {
          ...state[questionType],
          score: addScore,
          userAnswers: {
            ...state[questionType].userAnswers,
            [action.payload.index]: {
              selected: action.payload.option,
              isCorrect: action.payload.option === action.payload.correctAnswer,
              hasAnswered: true,
            },
          },
        },
      };
    }
    case "question/next": {
      const questionLimit =
        state.index < state[state.type].questions.length - 1;
      return {
        ...state,
        finish: questionLimit ? state.finish : true,
        start: questionLimit ? state.start : false,
        index: questionLimit ? state.index + 1 : state.index,
      };
    }
    case "question/prev":
      return {
        ...state,
        index: state.index < 1 ? state.index : state.index - 1,
      };
    case "question/option/stored": {
      // Store the shuffled to avoid reshuffling
      const { index, options, type } = action.payload;
      const storeName = type;
      const optionList = [...state[storeName].storedOptions];
      optionList[index] = options;
      return {
        ...state,
        [storeName]: { ...state[storeName], storedOptions: optionList },
      };
    }
    default:
      throw new Error(`Unknown Action ${action.type}`);
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useQuiz must be used within the QuizProvider");
  return context;
}

export { useQuiz, QuizProvider };
