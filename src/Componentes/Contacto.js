import React, { useState } from "react";
import './Estilos/Contacto.css';
import contactImage from "../Componentes/Imagenes/contacto.png";  // Asegúrate de tener esta imagen en tu carpeta de imágenes

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    softwareType: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría el código para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <section className="contact-us-section">
      <h3>Ponte en contacto con nosotros... </h3>
      <div className="contact-us-container">
        <div className="contact-form">
          <h2>Contáctanos</h2>
          {/* Imagen debajo del título en pantallas pequeñas */}
          <div className="contact-image-mobile">
            <img src={contactImage} alt="Contacto" />
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="softwareType">Sector de su empresa:</label>
            <select
              id="softwareType"
              name="softwareType"
              value={formData.softwareType}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="salud">Salud</option>
              <option value="finanzas">Finanzas</option>
              <option value="ecommerce">Ecommerce</option>
              <option value="social">Social</option>
              <option value="otro">Otro</option>
            </select>

            <label htmlFor="softwareType">Tipo de desarrollo:</label>
            <select
              id="softwareType"
              name="softwareType"
              value={formData.softwareType}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="web">Desarrollo Web</option>
              <option value="mobile">Desarrollo Móvil</option>
              <option value="marketing">Marketing digital</option>
              <option value="database">Gestion de base de datos</option>
              <option value="red">Instalacion de redes</option>
            </select>

            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>

        {/* Imagen a la derecha en pantallas grandes */}
        <div className="contact-image">
          <img src={contactImage} alt="Contacto" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
