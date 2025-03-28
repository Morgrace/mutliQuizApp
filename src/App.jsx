import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import QuizScreen from "./Pages/QuizScreen";
import Results from "./Pages/Results";
import { QuizProvider } from "./contexts/QuizContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = function () {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="question/:id" element={<QuizScreen />} />
          <Route path="results" element={<Results />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
};

export default App;
