import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar Contato" />
      <S.Filtros>
        <FiltroCard legenda="Família" contador={5} />
        <FiltroCard legenda="Trabalho" contador={3} />
        <FiltroCard legenda="Amigos" contador={6} />
        <FiltroCard legenda="Todos" contador={14} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
