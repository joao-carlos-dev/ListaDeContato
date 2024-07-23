import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'status' | 'todas'
  valor?: enums.Status
}
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispach = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const contatos = useSelector((state: RootReducer) => state.contatos)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContato = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'status') {
      return contatos.itens.filter((item) => item.status === valor).length
    }
    return 0
  }

  const filtrar = () => {
    dispach(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarContato()

  return (
    <S.Card $ativo={ativo} $status={valor} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
