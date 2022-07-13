import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 84px;
  background-color: #ffffff;

  a {
    padding: 0px 72px;
  }

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`
