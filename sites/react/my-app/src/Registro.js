import React,{Component} from 'react';

class Registro extends Component{
        constructor(props){
            super(props);
            console.log(this.props.title)
        }
        componentDidMount(){
            this.setState({
                title:"ComponentDidMount22!"
            })
        }
        render(){
            return(
        <div>
            <label>
                {'Nombre'}
                <input type="text" name="nombre" placeholder="Ingrese Nombre"  />
            </label>
            <br/>
            <label>
                {'Apellido'}
                <input type="text" Id="apellido" name="apellido"  placeholder="Ingrese Apellido" />
            </label>
            <br/>        
            <label>
                {'Email'}
                <input type="text" name="email"  placeholder="Ingrese Email" />
            </label>
            <br/>        
            <label>
                {'Telefono'}
                <input type="number" name="telefono"/>
            </label>
            <br/>  
            <label>
                {'Password'}
                <input type="password" name="password" />
            </label>
            <br/>  
            <label>
                {'Confirmar Password '}
                <input type="password" name="password2" />
            </label>
            <div>
                
                <button onClick={this.props.modificar}>Agregar Amigo</button>
            </div>
            <div>
                {this.props.title}
            </div>
        </div>)
    }
}
//}

export default Registro;