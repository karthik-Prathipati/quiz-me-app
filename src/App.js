
import './App.css';
import React from 'react';
import Intro from './components/Intro';


function App() {
  const [quiz, startQuiz] = React.useState(true);
  return (
    <main>
      {
        quiz ?
        <Intro handleClick={startQuiz} />
        :
        <div className='quiz-page'>

        </div>
      }
    </main>
  );
}

export default App;
