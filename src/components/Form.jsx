import { useState } from "react";
import "./form.css";

function Form({ initialData, onSubmit }) {
  // Estado inicial é definido via props
  const [formData, setFormData] = useState(initialData);

  // Atualiza o estado ao alterar algum campo do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Chama a função passada via props ao submeter
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="formGroup">
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="formGroup">
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="formGroup">
        <label>Telefone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;
