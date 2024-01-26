import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (formData.name.length <= 5) {
      setError("Por favor, ingrese un nombre válido (más de 5 caracteres).");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos pronto vía correo.`);
      setError("");
    } else {
      setError("Por favor, verifique su información nuevamente.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="divform">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Subject
            <br />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message
            <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;