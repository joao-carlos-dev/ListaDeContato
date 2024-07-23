import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #e0ffff;
  height: 100vh;

  @media screen and (min-width: 360px) and (max-width: 820px) {
    width: 150px;
    padding: 8px;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;

  @media screen and (min-width: 360px) and (max-width: 820px) {
    display: block;
  }
`
