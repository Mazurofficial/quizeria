import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { QuizPage } from './pages/QuizPage';
import { ResultsPage } from './pages/ResultsPage';
import { MainPage } from './pages/MainPage';

function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/quiz/:id" element={<QuizPage />} />
               <Route path="/results" element={<ResultsPage />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
