import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'João Carlos Borges',
      enums.Status.FAMILIA,
      'joaocarlosifsc@hotmail.com',
      48991268854,
      1
    ),
    new Contato(
      'Maria da Silva',
      enums.Status.AMIGOS,
      'silvaaria@hotmail.com',
      48991268866,
      2
    ),
    new Contato(
      'José Pedro',
      enums.Status.TRABALHO,
      'pedrinho@hotmail.com',
      48998868854,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
