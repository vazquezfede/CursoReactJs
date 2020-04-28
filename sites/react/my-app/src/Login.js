import React,{Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props.title)
    }
    
    render(){
    
        return(
            <div>
                Login
                {this.props.title}
                <button onClick={this.props.modificar}>Cambiar Title App</button>
            </div>
        )
    }
}

export default Login;