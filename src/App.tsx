import React from 'react';
import './App.css';
import { QuizPage } from './pages/QuizPage';
import { ResultsPage } from './pages/ResultsPage';

function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <QuizPage />
            <ResultsPage />
         </div>
      </div>
   );
}

export default App;
