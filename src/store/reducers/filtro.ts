import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo: string
  criterio: 'status' | 'todas'
  valor?: enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer