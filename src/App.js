import React from "react"

class App extends React.Component {
  state = {
    name: ""
  }

  componentDidMount() {
    

    fetch("http://localhost:3000/first")
      .then(res => { 
        console.log('Response:', res)
      return res.json();})
      .then(data => {
        console.log('data:', data)
        this.setState({ name: data.name })})

      console.log(this.state.name);
  }

  render() {
    return (
      
      <h1>Hello {this.state.name}!</h1>
    )
  }
}

export default App

