import config from '../config'
import TokenService from '../Services/token-service'

const QuestionApiService = {
  getQuestions () {
    return fetch(`${config.API_ENDPOINT}/question`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json
      )
  }
}