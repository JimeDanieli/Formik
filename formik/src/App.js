import { useFormik } from 'formik';
import './App.css';
//useFormik recibe como argumento un objeto y con ese objeto nosotros podemos indicar varios parametros de configuracion
//el primero que le queremos pasar son los valores iniciales, en vez de useState, vamos a usar initialValues, que contiene otro objeto literal que va a contener los valores de los campos de nuestros formularios y estos van acompañados de los nombres de los formularios como su llave
//onSubmit recibe los valores que tiene nuestro formulario
function App() {
  const formik= useFormik({
    initialValues:{
      name:'',
      lastname:'',
      email:'',
    },
    onSubmit: values=> console.log(values)
  })
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
