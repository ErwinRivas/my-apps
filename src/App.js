import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component{
  state= {
    characters: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  
  handleSubmit =(character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render(){
    const { characters } = this.state    //const characters = this.state.characters

    return(
      <div className="container">
      
      <div className="row align-items-start">
      <br/>
      <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      <br/>
      <Form handleSubmit={this.handleSubmit}/>
      </div>
      </div>
    )
  }
}



export default App