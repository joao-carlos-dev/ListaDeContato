import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../../styles'
import { Campo } from '../../../styles'
import { Form, Opcoes, Opcao } from './style'
import * as enums from '../../../utils/enums/Contato'
import Contato from '../../../models/Contato'
import { cadastrar } from '../../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [status, setStatus] = useState(enums.Status.AMIGOS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, status, email, telefone, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="E-mail"
          id="campoEmail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Nº do telefone"
        />
        <Opcoes>
          <p>Status</p>
          {Object.values(enums.Status).map((status) => (
            <Opcao key={status}>
              <input
                value={status}
                name="status"
                type="radio"
                onChange={(evento) =>
                  setStatus(evento.target.value as enums.Status)
                }
                id={status}
                defaultChecked={status === enums.Status.AMIGOS}
              />
              <label htmlFor={status}>{status}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar novo número</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
