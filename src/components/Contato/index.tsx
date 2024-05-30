import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  nome: string
  status: enums.Status
  email: string
  telefone: number
}

const Contato = ({ email, nome, status, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Nome>{nome}</S.Nome>
      <S.Email>{email}</S.Email>
      <S.Telefone>{telefone}</S.Telefone>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
