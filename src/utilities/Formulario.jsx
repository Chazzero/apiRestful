import { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se recargue la página
    console.log("Datos enviados:", formData);
    // acá podrías hacer un fetch o axios POST al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
