import { ReactNode } from 'react'
import * as S from './styles'

export type MainProps = {
  background: string
  children: ReactNode
}

const Main = ({ background, children }: MainProps) => {
  return (
    <S.Wrapper backgroundUrl={background}>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}

export default Main
