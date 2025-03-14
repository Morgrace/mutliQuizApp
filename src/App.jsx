import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import QuizScreen from './Pages/QuizScreen';
import Results from './Pages/Results';
import { useReducerContext, StartContext } from './Hooks/StartContext';
const AppContent = function () {
  const { state } = useReducerContext();
  const { start, finish } = state;
  return (
    <div className=" grid h-[100vh]">
      {!start && !finish && <HomePage />}
      {start && <QuizScreen />}
      {finish && <Results />}
      <Footer />
    </div>
  );
};
function App() {
  return (
    <StartContext>
      <AppContent />
    </StartContext>
  );
}
export default App;
