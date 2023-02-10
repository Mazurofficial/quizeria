import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { QuizPage } from './pages/QuizPage';

function App() {
   return (
      <div className="App">
         <QuizPage />
      </div>
   );
}

export default App;
