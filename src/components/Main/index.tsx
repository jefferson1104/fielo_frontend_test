import * as S from './styles'

type MainProps = {
  background: string
}

const Main = ({ background }: MainProps) => {
  return (
    <S.Wrapper backgroundUrl={background}>
      <h1>Fielo Test</h1>
    </S.Wrapper>
  )
}

export default Main
