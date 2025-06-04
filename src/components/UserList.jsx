// src/components/UserList.jsx
import { useEffect, useState } from "react";
import {
  fetchUsers,
  createUser,
  deleteUser,
  updateUser,
  patchUser,
} from "../api/userService";

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", casado: false, edad: "" });
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
    if (!newUser.name || !newUser.edad) return;
    try {
      await createUser({
        name: newUser.name,
        casado: newUser.casado,
        edad: parseInt(newUser.edad),
      });
      setNewUser({ name: "", casado: false, edad: "" });
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
  const handlePatch = async (id) => {
    try {
      await patchUser(id, { casado: true, edad: 30 }); // actualiza solo la edad
      getUsers(); // recarga lista actualizada
    } catch (err) {
      setError("Error al hacer patch");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="card1">
        <h4>Agregar Usuarios</h4>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          value={newUser.name}
          onChange={(a) => setNewUser({ ...newUser, name: a.target.value })}
          placeholder="agregar nombre"
        />
        <input
          type="text"
          value={newUser.casado}
          onChange={(a) => setNewUser({ ...newUser, casado: a.target.value })}
          placeholder="agregar casado"
        />
        <input
          type="text"
          value={newUser.edad}
          onChange={(a) => setNewUser({ ...newUser, edad: a.target.value })}
          placeholder="agregar edad"
        />
        <br />
        <button onClick={handleAdd}>Agregar</button>
      </div>
      <div className="userList-grid">
        {users.map((u) => (
          <div className="card1" key={u.id}>
            <input
              type="text"
              value={newEdit}
              onChange={(e) => setNewEdit(e.target.value)}
              placeholder="Cambiar el nombre"
            />
            <br />
            <strong>Nombre:</strong> {u.name}
            <br />
            <strong>Casado:</strong> {u.casado ? "si" : "no"}
            <br />
            <strong>Edad:</strong> {u.edad}
            <br />
            <strong>Id:</strong> {u.id}
            <br />
            <button onClick={() => handleEdit(u.id, u.name)}>Editar</button>
            <button onClick={() => handleDelete(u.id)}>Eliminar</button>
          </div>
        ))}
      </div>
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
