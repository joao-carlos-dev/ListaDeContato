import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

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
          <FiltroCard
            valor={enums.Status.FAMILIA}
            criterio="status"
            legenda="Família"
          />
          <FiltroCard
            valor={enums.Status.TRABALHO}
            criterio="status"
            legenda="Trabalho"
          />
          <FiltroCard
            valor={enums.Status.AMIGOS}
            criterio="status"
            legenda="Amigos"
          />
          <FiltroCard criterio="todas" legenda="Todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
