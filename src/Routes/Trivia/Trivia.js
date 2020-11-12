import React, { useEffect, useContext } from 'react';
import TriviaApp from '../../Components/TriviaApp/TriviaApp'
import QuestionApiService from '../../Services/question-api-service'
import AppContext from '../../Context/AppContext'

function Trivia(props) {
  const AppStore = useContext(AppContext)

  useEffect(() => {
    QuestionApiService.getQuestions()
      .then(res => AppStore.setQuestions(res))
      .catch(e => console.log(e))
  }, [])
  
  return (
    <section id='trivia'>
      <TriviaApp />
    </section>
  )
}

export default Trivia
