
import './App.css';
import React from 'react';
import Intro from './components/Intro';
import Quiz from './components/quiz';


function App() {
  const [quiz, startQuiz] = React.useState(true);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple")
      .then(responce => responce.json())
      // .then(result => JSON.parse(result))
      .then(ques => setData(ques.results))

  }, [])
  const questions = data.map((ele,index) => {
    return (
      <Quiz   key={index} question={ele.question} options ={ele.incorrect_answers} answer ={ele.correct_answer} />
    );
  })
  return (
    <main>
      {
        quiz ?
          <Intro handleClick={startQuiz} />
          :
          <div className='questions'>
            {questions}
          </div>
      }
    </main>
  );
}

export default App;
