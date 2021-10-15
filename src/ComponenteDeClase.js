import React from "react";
//COMPONENTE DE CLASE
//tenemos que obtener los props de this (el this hace referencia al contexto de la clase)
//para obtener la propiedad "name" hay que usar la desestructuracion


// class ComponenteDeClase extends React.Component {
//     //se renderiza con el metodo render
//     render(){
//         const {nombre} = this.props;
//         return (
//             <div>
//               <h1>Hola {nombre}</h1>
//             </div>
//           );
//     }
// } 

// export default ComponenteDeClase


class ComponenteDeClase extends React.Component {
  //metodo contructor de la clase y recibe los props
  constructor(props) {

    //llamamos al metodo super y le pasamos los props
    super(props);

    //declaramos nuestro estado inicial
    this.state = {nombre: this.props.nombre};
  }

  //metodo que se llama cuando el componente se termino de renderizar
  componentDidMount(){
    //setState es una funcion asincrona 
    this.setState(() => ({nombre: "Pedro"}));
    console.log("Montaje");
  }

  componentDidUpdate(){
    console.log("Update")
  }

  componentWillUnmount(){
    console.log("Desmontaje")
  }

  render() {
    return(
      <h1>Hola {this.state.nombre}</h1>
    )
  }
}

export default ComponenteDeClase