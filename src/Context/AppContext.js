import React, { Component } from 'react'

const AppContext = React.createContext()


export class AppProvider extends Component {
  render() {
    const  value = {}
    return (
      <AppContext.Provider value={value}>
        
      </AppContext.Provider>
    )
  }
}

export default AppContext
