import React from 'react';
import FormLogo from './assets/form-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './App.css';

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatória"),
  confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais")
  
}).required();

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(userData){
    console.log(userData);
  }

  console.log({errors});

  console.log(watch("name"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="imagem-logo"/>

      <label>
        Nome
        <input type="text" {...register("name", { required: true })}/>

        <span>{errors.name?.message}</span> 

      </label>

      <label>
        Email
        <input type="text" {...register("email")}/>

        <span>{errors.email?.message}</span> 
      </label>

      <label>
        Senha
        <input type="password" {...register("password")}/>

        <span>{errors.password?.message}</span> 
      </label>

      <label>
        Confirmar senha
        <input type="password" {...register("confirmPassword")}/>

        <span>{errors.confirmPassword?.message}</span> 
      </label>

      <button type="submit">Cadastrar-se</button>
    </form>
  );
}

export default App;
