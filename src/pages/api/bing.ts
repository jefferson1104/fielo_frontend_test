import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

async function getBingImage(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await axios.get(
      'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
    )

    const bgImage = `https://www.bing.com${data.data.images[0].url}`

    res.status(200).json({ background: bgImage })
  } catch (e) {
    console.error(e)
  }
}

export default getBingImage
