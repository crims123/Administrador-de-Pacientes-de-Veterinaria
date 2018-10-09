import React from "react";


class Cita extends React.Component{
	render(){

		// creamos un objeto destructo para destruir y separar el objeto recibido
		// agregamos los valores deseados con las nuevas variables del objeto
		// en este componente vamos a ver algo nuevo que va a servir para 
		// borrar los componentes al hacerle click
		// <button onClick={()=>this.props.borrarCita(this.props.idCita)} 
		// ahi le enviamos el id del maps al componente padre Apps todo se esta pasando por props desde
		// los apdres hasta el ultimo hijo q es Cita
		var {mascota,propietario,hora,fecha,sintomas} = this.props.info;

		

		return(
				<div className="media mt-3">
				<div className="media-body">
				<h3 className="mt-0">{mascota} </h3>
				<p className="card-text"><span>Dueño: </span> {propietario}</p>
				<p className="card-text"><span>Fecha: </span> {fecha}</p>
				<p className="card-text"><span>Hora: </span> {hora}</p>
				<p className="card-text"><span>Sintomas: </span> {sintomas}</p><br/>

				<button onClick={()=>this.props.borrarCita(this.props.idCita)} className="btn btn-danger">Borrar &times; </button>

					</div>
				</div>
			);
	}
}

export default Cita;