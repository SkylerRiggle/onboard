import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

const Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string = 'http://127.0.0.1:3333/api/item/delete'

  //Delete an item from the server
  await axios
    .post(url, {
        id: req.body.id
    }).then(() => {
        res.status(200).json("Deleted")
    })
    .catch(({ err }) => {
        res.status(400).json({ err })
    })
}

export default Delete