import React, { useState } from 'react'
import Button from '../../components/Button'

import Input from '../../components/Input'

import api from '../../services/api'

import './style.css'

function SignUp() {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')

  function signUp(event: React.FormEvent) {
    event.preventDefault()

    const user = {
      name,
      lastname,
      email,
      password,
    }

    console.log(user)

    api
      .post('/signup', user)
      .then((res) => {
        console.log(res.data)
        setFormError('')
        setFormSuccess('Usuário cadastrado com sucesso!')
      })
      .catch((err) => setFormError(err.response.data.message))
  }

  return (
    <form onSubmit={signUp}>
      <Input
        name="name"
        label=""
        placeholder="Nome"
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Input
        name="lastname"
        label=""
        placeholder="Sobrenome"
        onChange={(e) => setLastname(e.currentTarget.value)}
      />
      <Input
        name="email"
        label=""
        placeholder="E-mail"
        type="email"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Input
        name="password"
        label=""
        placeholder="Senha"
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      {formError.length > 0 ? (
        <span className="form-error">{formError}</span>
      ) : (
        <></>
      )}
      {formSuccess.length > 0 ? (
        <span className="form-success">{formSuccess}</span>
      ) : (
        <></>
      )}
      <Button handler={signUp} type="submit" text="Concluir cadastro" />
    </form>
  )
}

export default SignUp
