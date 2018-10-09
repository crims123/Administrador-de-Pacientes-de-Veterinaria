import React from "react";
import Cita from './Cita';



class ListaCitas extends React.Component{

// creamos un componente de la lista de citas que va a separar todos los objetos por medio de un map
// y luego enviamos los datos a un componente hijo llamado cita que va a crear la cita especifica






	render(){

		const citas = this.props.citas;


		// creaos la condicion para saber si el objeto esta vacio o no
		// separamos el objeto con Object.keys(citas).length==0 y le decimos que si el largo del vector
		// es 0 diga el mensaje no hay citas y si es diferente a 0 diga el otro menasje

		const mensaje = Object.keys(citas).length==0 ? "No hay citas":"Administra tus citas aqui";
		
		return(
			<div className="card mt-5">
				<div className="card-body">
				<h2 className="card-title text-center" >{mensaje} </h2>
				<div clasName="listas-citas">
					{Object.keys(this.props.citas).map(cita=>(

							<Cita
								key={cita}
								idCita={cita}
								info = {this.props.citas[cita]}
								borrarCita = {this.props.borrarCita}

							/>



						))}
						</div>
				</div>
			
			</div>

			);
	}
}

export default ListaCitas;