import React from 'react';

function Registro(){
    return (
        <div>
            <label>
                {'Nombre '}
                <input type="text" name="nombre" placeholder="Ingrese Nombre"  />
            </label>
            <br/>
            <label>
                {'Apellido '}
                <input type="text" name="apellido"  placeholder="Ingrese Apellido" />
            </label>
            <br/>        
            <label>
                {'Email '}
                <input type="text" name="email"  placeholder="Ingrese Email" />
            </label>
            <br/>        
            <label>
                {'Telefono '}
                <input type="number" name="telefono"/>
            </label>
            <br/>  
            <label>
                {'Password '}
                <input type="password" name="password" />
            </label>
            <br/>  
            <label>
                {'Confirmar Password '}
                <input type="password" name="password2" />
            </label>
        </div>
    )
}

export default Registro;