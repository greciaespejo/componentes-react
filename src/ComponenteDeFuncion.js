import  { useState, useEffect } from "react"
//COMPONENTE DE FUNCION
//En los componentes de funcion los props se pasan como un argumento de la funcion
//se utilizan como un objeto


// export default function ComponenteDeFuncion(props) {

//   return (
//     <div>
//       <h1>Hola {props.nombre}, tengo {props.edad} años</h1>
//     </div>
//   );
// }








 //validando Props
 //if (!nombre) throw Error("no se ingresó un nombre")

// //Validando objetos
// ComponenteDeFuncion.propTypes = {
//   nombre: PropTypes.string,
//   edad: PropTypes.number
// }








//HOOK UseState
export default function ComponenteDeFuncion( {nombre, edad} ) {
  //utilizamos la deconstruccion de array porque el hook nos retorna un array con dos elementos
  const [name, setName] = useState(nombre);

  //No se puede hacer esto: nombre = "Juan"
  //Se tiene que hacer mediante el setName pero no lo vamos a hacer porque se va a renderizar de manera infinita
  useEffect(() => {
    setName("Carlos")
    console.log("renderizado")
  }, [])

  return (
          <div>
            <h1>Hola {name}, tengo {edad} años</h1>
          </div>
        );
}
