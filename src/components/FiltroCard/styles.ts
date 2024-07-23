import styled from 'styled-components'

type Props = {
  $ativo: boolean
  $status?: string
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.$ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;

  @media screen and (min-width: 360px) and (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Contador = styled.span`
  font weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;

  @media screen and (min-width: 360px) and (max-width: 820px) {
    padding: 8px;
  }
`
