import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

const Create = async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string = 'http://127.0.0.1:3333/api/item/create'

  //Create an item in the server
  await axios
    .post(url, {
        name: req.body.name,
        cost: req.body.cost
    })
    .catch(({ err }) => {
        res.status(400).json({ err })
    })
}

export default Create