import React from "react";


class AgregarCita extends React.Component{

//crear refs

nombreMascotaRef = React.createRef();
 propietarioRef = React.createRef();
 fechataRef = React.createRef();
 horaMascotaRef = React.createRef();
 sintomaMascotaRef = React.createRef();



crearNuevaCita =(e)=>{
	e.preventDefault();

	//crear objeto
	const CrearCita = {

		mascota:this.nombreMascotaRef.current.value,
		propietario:this.propietarioRef.current.value,
		hora:this.horaMascotaRef.current.value,
		fecha:this.fechataRef.current.value,
		sintomas:this.sintomaMascotaRef.current.value,
	}
	//console.log(CrearCita);

	// enviarlo a props
	this.props.crearCita(CrearCita);
	// resetear formulario
	e.currentTarget.reset();

}


	render(){
		return(
			 <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                    <form onSubmit={this.crearNuevaCita} >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.propietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechataRef}  type="date" className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.horaMascotaRef}  type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomaMascotaRef}   className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
        </div>

			);
	}
}

export default AgregarCita;