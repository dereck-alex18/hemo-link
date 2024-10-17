import * as Yup from "yup";

export default Yup.object({
    name: Yup.string().required("O nome é obrigatorio!"),
    email: Yup.string()
      .email("Email inválido")
      .required("O email é obrigatório!"),
    password: Yup.string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    address: Yup.string().required("Endereço é obrigatório!"),
    bloodType: Yup.string().required("Tipo sanguíneo é obrigatório!"),
    phone: Yup.string()
      .matches(/^\(\d{2}\)\s?9.?\d{4}-\d{4}$/, "Telefone inválido")
      .required("O Telefone é obrigatorio"),
    cpf: Yup.string()
      .matches(/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/, "CPF inválido!")
      .required("CPF é obrigatório!"),
    cep: Yup.string()
      .matches(/^\d{5}-?\d{3}$/, "CEP inválido!")
      .required("CEP é obrigatório!"),
    city: Yup.string().required("Cidade é obrigratória!"),
    state: Yup.string().required("Estado é obrigratório!"),
 //   available: Yup.string().required("Disponibilidade é obrigatório"),
  });