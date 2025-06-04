
import React, { useEffect, useState } from 'react';
import {usuarios, sumar} from './utilities/funciones'; // <-- Importa las funciones y datos
import Formulario from './utilities/Formulario';
import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';
import UserList from './components/UserList';

// import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom'; mm un tuto con cosas demas para app SPA

function app(){
  const resultado = sumar(2,3);
  const [error1, setError]= useState ();
  const [user, setUser] = useState([]);


  
  return (
<>

{/* <Formulario/> */}
<br />
<h1>api modularizada</h1>
<UserList/>
tortilla
<br />
<button className='btn btn-primary'>Hola mundo </button>

<div>
<button type="button" className="btn btn-secondary">Secondary</button>

</div>
</>
  );
}



export default app;









// import React, { useEffect, useState } from 'react';
// import { obtenerUsuarios } from './api/apiUsers'; // <-- Importa la función

// function App() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     obtenerUsuarios()
//       .then(data => {
//         setUsuarios(data);
//         setCargando(false);
//       })
//       .catch(error => {
//         console.error("Error al cargar usuarios:", error);
//         setCargando(false);
//       });
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Lista de Usuarios</h1>

//       {cargando ? (
//         <p>Cargando datos...</p>
//       ) : (
//         <ul>
//           {usuarios.length === 0 ? (
//             <li>No hay usuarios disponibles.</li>
//           ) : (
//           usuarios.map(usuario => (
//               <li key={usuario.id}>
//                 {usuario.title} - {} 
//               </li>
//             ))
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;