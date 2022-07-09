import styled from 'styled-components'

type WrapperProps = {
  backgroundUrl: string
}

export const Wrapper = styled.main<WrapperProps>`
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${({ backgroundUrl }) => backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`
