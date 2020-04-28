import React,{Component} from 'react';
import './App.css';
//import Login from './Login'
import Registro from './Registro';

class App extends Component{
  constructor(){
      super()
      this.state = {
          titulo:"React app"
      }

      this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
      
      this.setState({
          titulo:"Amigo Agregado!"
      })
  }
  render(){
      return (
          <div className="App">
          <header className="App-header">

          <Registro title={this.state.titulo} modificar={this.handleClick}/>
           {/* <Login title={this.state.titulo} modificar={this.handleClick} /> */}

          </header>
          </div>
      );
  }
}
export default App;
