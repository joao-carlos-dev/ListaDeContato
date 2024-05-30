import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar Contato" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
