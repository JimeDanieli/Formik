import { useFormik } from 'formik';
import './App.css';
//useFormik recibe como argumento un objeto y con ese objeto nosotros podemos indicar varios parametros de configuracion
//el primero que le queremos pasar son los valores iniciales, en vez de useState, vamos a usar initialValues, que contiene otro objeto literal que va a contener los valores de los campos de nuestros formularios y estos van acompañados de los nombres de los formularios como su llave
//onSubmit recibe los valores que tiene nuestro formulario
//a su vez no tenemos que prevenir por defecto porque useFormik hace eso por nosotros
  //no se ejecuta hasta que no toquemos el campo
  const validate=(values)=>{
    const errors={}

    if(!values.name){
    errors.name='Required'
    }  else if (values.name.length < 3){
      errors.name='Name is too short'
    }
    if(!values.lastname){
      errors.lastname='Last name is required'
    } else if (values.lastname.length < 3){
      errors.lastname= 'Last name is too short'
    }
    if(!values.email){
      errors.email='E-mail is required'
    } else if(values.email.length < 10){
      errors.lastname='Invalid E-mail'
    }
    return errors

}
function App() {
  const formik= useFormik({
    initialValues:{
      name:'',
      lastname:'',
      email:'',
    },
  
    validate,
    onSubmit: values=> console.log(values)
  })
  //el onBlur nos permite saber si el campo del input ha sido tocado o no, es de formik
  //getFieldProps nos trae todos los props que le habiamos pasado al input, pero en menos codigo. Lo que hicimos con name, se puede hacer con lastname e email
  return (
    <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input type='text' {...formik.getFieldProps('name')}/>
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> :null}
          <br />
        <label>Last name</label>
        <input
          name='lastname'
          type='text'
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div>: null}
          <br />
        <label>E-mail</label>
        <input
          name='email'
          type='text'
          onChange={formik.handleChange} 
          onBlur={handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <br />
        <button type='submit'>Send</button>
    </form>
  );
}

export default App;
