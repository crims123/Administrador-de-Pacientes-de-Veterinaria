import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

//tengo q crear el estado inicial
state = {
  citas:{},
}



crearCita= (infoCita)=>{
  //con estaa funcion recibimos el objeto del hijo

 
  //crear copia del estado que por el momento esta vacio
 const citas = {...this.state.citas}

  //agregarlo al estado actual con un id nuevo
  citas[`citas${Date.now()}`] = infoCita;

  //cambiar el estado
  this.setState({
    citas:citas
  })
}


// creamos una funcion para borrarcita
// primero recibimos el id del comonente hijo Cita que nos va a enviar el id que hay qu borrar

borrarCita= (id)=>{
    // leer el state
    const citas = {...this.state.citas};
    // borrar el state
    delete citas[id];
    // actualiazar el estado
    this.setState({
      citas:citas
    })

}

// metodos del ciclo de vida de react

componentDidMount(){
// lo ejecuta siempre de primera cuando se carga la pagina
const citasLocalStorage = localStorage.getItem("citas"); // obtenemos las citas q estan en el localstorage
// comprobamos si las citas estan vacias y si existen cambiamos el estado por las citas del storage pero 
// hay q transformarlas otra vez a objeto y para eso se usa el JSON.parse
if (citasLocalStorage) {
    this.setState({
      citas:JSON.parse(citasLocalStorage)
    })
}

}

componentDidUpdate(){

localStorage.setItem(
    "citas", JSON.stringify(this.state.citas)


  )

}
  render() {
    return (
      <div>
       <Header titulo="Administrador de Pacientes de Veterinaria"></Header>
      <div className="row" >
        <div className="col-md-6">
        <AgregarCita crearCita={this.crearCita} />
        </div>
        <div className="col-md-6">
       <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita} />
        </div>

      </div>
      </div>
    );
  }
}

export default App;
