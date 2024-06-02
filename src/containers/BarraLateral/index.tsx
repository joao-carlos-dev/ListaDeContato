import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispach = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar Contato"
          value={termo}
          onChange={(evento) => dispach(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Família" contador={5} />
          <FiltroCard legenda="Trabalho" contador={3} />
          <FiltroCard legenda="Amigos" contador={6} />
          <FiltroCard legenda="Todos" contador={14} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
