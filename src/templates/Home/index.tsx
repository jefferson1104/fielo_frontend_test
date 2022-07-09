import Header from 'components/Header'
import Main from 'components/Main'

type HomePageTemplateProps = {
  background: string
}

const HomePage = ({ background }: HomePageTemplateProps) => {
  return (
    <>
      <Header />
      <Main background={background} />
    </>
  )
}

export default HomePage
