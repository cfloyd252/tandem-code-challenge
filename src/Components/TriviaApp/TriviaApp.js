import React, { useState, useContext } from 'react'
import AppContext from '../../Context/AppContext'

function TriviaApp (props) {
  const AppContext = useContext(AppContext)
  const [view, setView] = useState('start');
  // const [questionIndex, setQuestionIndex] = useState(0);
  // const [score, setScore] = useState(0);

  switch (view) {
    case 'start':
      return (
        <div>
          <h1>Start View</h1>
        </div>
      )
  
    default:
      return (
        <div>
          <h1>Default View</h1>
        </div>
      );
  }
}

export default TriviaApp
