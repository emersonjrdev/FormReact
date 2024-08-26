import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado dentro do componente.
import "./form.css"; // Importa o arquivo de estilos CSS para estilizar o formulário.

function Form() {
  // Define um estado inicial para os dados do formulário usando o useState.
  const [formData, setFormData] = useState({
    name: "", // Inicializa o campo "name" com uma string vazia.
    email: "", // Inicializa o campo "email" com uma string vazia.
    phone: "", // Inicializa o campo "phone" com uma string vazia.
  });

  // Função chamada toda vez que um campo do formulário é alterado.
  const handleChange = (e) => {
    // Atualiza o estado do formulário com o novo valor do campo.
    // Usa a função setFormData para atualizar o estado.
    setFormData({
      ...formData, // Mantém os valores anteriores dos outros campos.
      [e.target.name]: e.target.value, // Atualiza o campo específico baseado no nome do input.
    });
  };

  // Função chamada ao submeter o formulário.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página).
    console.log("Dados do Formulário:", formData); // Exibe os dados do formulário no console do navegador.
  };

  return (
    // Atributo onSubmit vincula o handleSubmit para ser chamado ao enviar o formulário.
    <form onSubmit={handleSubmit} className="formContainer">
      {/* Campo para o nome */}
      <div className="formGroup">
        <label>Nome:</label>
        <input
          type="text" // Define o tipo de input como texto.
          name="name" // Define o nome do campo como "name", o que é usado para atualizar o estado.
          value={formData.name} // O valor do input é sincronizado com o estado.
          onChange={handleChange} // Chama a função handleChange toda vez que o usuário digita algo.
        />
      </div>

      {/* Campo para o e-mail */}
      <div className="formGroup">
        <label>E-mail:</label>
        <input
          type="email" // Define o tipo de input como e-mail, com validação automática do formato.
          name="email" // Define o nome do campo como "email".
          value={formData.email} // O valor do input é sincronizado com o estado.
          onChange={handleChange} // Chama a função handleChange para atualizar o estado.
        />
      </div>

      {/* Campo para o telefone */}
      <div className="formGroup">
        <label>Telefone:</label>
        <input
          type="tel" // Define o tipo de input como telefone, permitindo apenas números e alguns símbolos.
          name="phone" // Define o nome do campo como "phone".
          value={formData.phone} // O valor do input é sincronizado com o estado.
          onChange={handleChange} // Chama a função handleChange para atualizar o estado.
        />
      </div>

      {/* Botão para enviar o formulário */}
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form; // Exporta o componente para ser usado em outras partes da aplicação.
