import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

const GetAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string = 'http://127.0.0.1:3333/api/item'

  // Get all items from the server
  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}

export default GetAll