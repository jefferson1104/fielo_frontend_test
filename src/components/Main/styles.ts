import styled from 'styled-components'

type WrapperProps = {
  backgroundUrl: string
}

export const Wrapper = styled.main<WrapperProps>`
  height: 100vh;
  background: url(${({ backgroundUrl }) => backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 22px;
  padding: 100px 0;
  max-width: 1200px;
`
