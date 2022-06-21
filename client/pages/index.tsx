import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Trash from '../assets/images/trash.png'

const Home: NextPage = () => {
  const [newName, setNewName] = useState('')
  const [newCost, setNewCost] = useState('-1')
  let localData: Array<{id: number, name: string, cost: number}> = []
  let total = 0

  const fetchItems = async () => {
    const response = await fetch('/api/item/')
    const items = await response.json()

    items.data.forEach((item: any) => {
      localData.push({id:item.id, name:item.name, cost:item.cost})
      total += item.cost
    });
  }

  fetchItems()

  return (
    <div className='background'>
      <h1>Shopping List</h1>

      <nav>
        <ul>
          {
            localData.map((item) => {
              return (
                <li key={item.id}>
                  <div className='item'>
                    <div style={{display:'flex', flexDirection:'column', width:'50vw', justifyContent:'center'}}>
                      <p>{item.name}</p>
                      <p>${item.cost}</p>
                    </div>

                    <button onClick={(e) => DeleteItem(item.id)}>
                      <Image src={Trash} width='75px' height='75px'/>
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </nav>

      <Popup trigger={<button>ADD ITEM</button>} position='top center'>
          <div className='popup'>
            <p>Input Item Information:</p>
            
            <div>
              <label>Name: </label>
              <input type="text" onChange={(e) => setNewName(e.target.value)}/>
            </div>

            <div>
              <label>Cost: </label>
              <input type="number" onChange={(e) => setNewCost(e.target.value)}/>
            </div>

            <button onClick={(e) => CreateItem(newName, +newCost)}>ADD</button>
          </div>
      </Popup>

      <div className='footer'>
        <h2>TOTAL: ${total}</h2>
      </div>
    </div>
  )
}

function CreateItem(name: string, cost: number) {
  if (name.length === 0 || cost < 0) {
    alert('Invalid Input!')
    return
  }

  fetch('api/item/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, cost})
  })

  window.location.reload()
}

function DeleteItem(id: number) {
  fetch('api/item/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  })

  window.location.reload()
}

export default Home
