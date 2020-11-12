import React, { Component } from 'react'

const AppContext = React.createContext({
  state: {},
  view: 'start'
})


export class AppProvider extends Component {
  state = {
    questions: [],
    view: 'start',
    questionIndex: 0
  }

  setQuestions = questions => {
    this.setState({ questions })
  }

  render() {
    const  value = {
      setQuestions: this.setQuestions,
      questions: this.state.questions,
      view: this.state.view
    }

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContext
