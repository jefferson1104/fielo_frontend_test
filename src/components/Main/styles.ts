import styled from 'styled-components'

type WrapperProps = {
  backgroundUrl: string
}

export const Wrapper = styled.main<WrapperProps>`
  height: calc(100vh - 84px);

  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
  padding: 100px 0;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #222f3e;
  }
`
