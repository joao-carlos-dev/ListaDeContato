import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'João Carlos Borges',
      status: enums.Status.FAMILIA,
      email: 'joaocarlosifsc@hotmail.com',
      telefone: 48991268854
    },
    {
      id: 2,
      nome: 'Maria da Silva',
      status: enums.Status.AMIGOS,
      email: 'silvaaria@hotmail.com',
      telefone: 48991268866
    },
    {
      id: 3,
      nome: 'José Pedro',
      status: enums.Status.TRABALHO,
      email: 'pedrinho@hotmail.com',
      telefone: 48998868854
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer