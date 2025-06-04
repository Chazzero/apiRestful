// src/components/UserList.jsx
import { useEffect, useState } from "react";
import {
  fetchUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../api/userService";

function UserList() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const [newEdit, setNewEdit] = useState("");

  const getUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError("Error al obtener usuarios");
    }
  };

  const handleAdd = async () => {
    if (!newName) return;
    try {
      await createUser({ name: newName });
      setNewName("");
      getUsers();
    } catch (err) {
      setError("Error al crear usuario");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      getUsers();
    } catch (err) {
      setError("Error al borrar usuario");
    }
  };

  const handleEdit = async (id, name) => {
    if (!newEdit) return;
    try {
      await updateUser(id, { name: newEdit });
      setNewEdit("");
      getUsers();
    } catch (err) {
      setError("Error al editar usuario");
    }
  };
  useEffect(() => {
  getUsers();
}, []);
  return (
    <>
      <h2>Usuarios</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Cambiar el nombres"
      />

      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {users.map((u) => (
          <div>
            <br />
            <input
        type="text"
        value={newEdit}
        onChange={(e) => setNewEdit(e.target.value)}
        placeholder="Cambiar el nombres"
      />
      
            <br />
          <div className="card">
          
          <li key={u.id}>
            <strong>Nombre:</strong> {u.name}
            <br />
            <strong>Casado:</strong> {u.casado ? "si" : "no"} 
            <br />
            <strong>Edad:</strong>
            {u.edad}
            <br />
            <strong>Id:</strong> {u.id}
            <br />
            <button onClick={() => handleEdit(u.id, u.name)}>
              Editar
            </button>{" "}
            {/*crear una forma de agregar un input y de esa forma poder editar de forma verdadera el usuario  */}
            <button onClick={() => handleDelete(u.id)}>Eliminar</button>
          </li>
          
          </div>
          <br/>
          </div>
        ))}
      </ul>
    </>
  );
}

export default UserList;

// import { useEffect, useState } from "react";
// import { fetchUsers } from "../api/api2"

// function UserList() {
//   const [users, setUsers] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (err) {
//         setError("Error al obtener los usuarios.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getUsers();
//   }, []);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   if (!users || users.length === 0) return <p>No se encontraron usuarios.</p>;

//   return (
//     <ul>
//       {users.map((userObj) => (
//         <li key={userObj.id}>{userObj.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default UserList;
