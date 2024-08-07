import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  status?: enums.Status
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === enums.Status.FAMILIA) return variaveis.azul
    if (props.status === enums.Status.TRABALHO) return variaveis.laranja
    if (props.status === enums.Status.AMIGOS) return variaveis.vermelho2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #e0ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const informacao = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 280px) and (max-width: 820px) {
    font-size: 12px;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 255, 0, 0.3);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
