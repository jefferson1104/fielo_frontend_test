import { GetStaticProps } from 'next'
import { api } from 'utils/api'

import HomePage from 'templates/Home'

type HomeProps = {
  image: string
}

const Home = ({ image }: HomeProps) => {
  return <HomePage background={image} />
}

export const getStaticProps: GetStaticProps = async () => {
  const bingData = await api.get('/api/bing')

  const image = JSON.stringify(bingData.data.background)

  return {
    props: {
      image
    }
  }
}

export default Home
