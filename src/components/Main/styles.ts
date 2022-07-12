import styled from 'styled-components'

type WrapperProps = {
  backgroundUrl: string
}

export const Wrapper = styled.main<WrapperProps>`
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;

  background: url(${({ backgroundUrl }) => backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  max-width: 1200px;
`
