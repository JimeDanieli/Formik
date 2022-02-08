import { useFormik } from 'formik';
import './App.css';
//useFormik recibe como argumento un objeto y con ese objeto nosotros podemos indicar varios parametros de configuracion
//el primero que le queremos pasar son los valores iniciales, en vez de useState, vamos a usar initialValues, que contiene otro objeto literal que va a contener los valores de los campos de nuestros formularios y estos van acompañados de los nombres de los formularios como su llave
//onSubmit recibe los valores que tiene nuestro formulario
//a su vez no tenemos que prevenir por defecto porque useFormik hace eso por nosotros
function App() {
  const formik= useFormik({
    initialValues:{
      name:'',
      lastname:'',
      email:'',
    },
    //no se ejecuta hasta que no toquemos el campo
    validate:(values)=>{
        const errors={}

        if(!values.name){
        errors.name='Required'
        }  else if (values.name.length < 3){
          errors.name='Name is too short'
        }
        if(!values.lastname){
          errors.lastname='Last name is required'
        }
        if(!values.email){
          errors.email='E-mail is required'
        }
        return errors

      
    },
    onSubmit: values=> console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          name='name'
          type='text'
          onChange={formik.handleChange} 
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> :null}
          <br />
        <label>Last name</label>
        <input
          name='lastname'
          type='text'
          onChange={formik.handleChange} 
          value={formik.values.lastname}
        />
        {formik.errors.lastname ? <div>{formik.errors.lastname}</div>: null}
          <br />
        <label>E-mail</label>
        <input
          name='email'
          type='text'
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <br />
        <button type='submit'>Send</button>
    </form>
  );
}

export default App;
