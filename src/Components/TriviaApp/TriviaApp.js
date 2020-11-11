import React, { useState } from 'react'

function TriviaApp (props) {
  const [view, setView] = useState('start');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  switch (view) {
    case 'start':
      return (
        <div>
          
        </div>
      )
  
    default:
      break;
  }
}

export default TriviaApp
