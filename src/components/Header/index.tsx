import Logo from 'components/Logo'
import Link from 'next/link'

import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default Header
