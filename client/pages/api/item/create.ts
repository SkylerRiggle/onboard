import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string = 'http://127.0.0.1:3333/api/item/create'

  await axios
    .post(url, {
        name: 'Orange',
        cost: 123
    })
    .catch(({ err }) => {
        res.status(400).json({ err })
    })
}