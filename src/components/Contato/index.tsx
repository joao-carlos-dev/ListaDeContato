import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Tag>Amigo</S.Tag>
    <S.Nome>Nome do contato</S.Nome>
    <S.Email>E-mail do contato</S.Email>
    <S.Telefone>Cel do contato</S.Telefone>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
