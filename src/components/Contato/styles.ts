import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

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
  backround-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  display: block;
  border: none;
`

export const Email = styled.input`
  font-size: 14px;
  font-weight: bold;
  padding: 8px 0;
  display: block;
  border: none;
`

export const Telefone = styled.input`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
  display: block;
  border: none;
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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
