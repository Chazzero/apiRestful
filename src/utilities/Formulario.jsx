function Formulario() {
return (
    <div className="formulario-contenedor">
      <h2>Formulario de Contacto</h2>
      <form action="#" method="POST">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Formulario;
