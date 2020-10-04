import React, {useState} from 'react'
import Button from '../../components/Button'

import Input from '../../components/Input'

import api from '../../services/api'

import './style.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState('')
    const [formSuccess, setFormSuccess] = useState('')

    function login(event: React.FormEvent) {
        event.preventDefault()

        const user = {
            email,
            password,
          }
      
          console.log(user)
      
          api
            .post('/login', user)
            .then((res) => {
              console.log(res.data)
              setFormError('')
              setFormSuccess('Usuário logado com sucesso!')
            })
            .catch((err) => setFormError(err.response.data.message))
    }

    return(
        <form onSubmit={login}>
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
        <Button handler={login} type="submit" text="Entrar"/>
      </form>
    )
}

export default Login;