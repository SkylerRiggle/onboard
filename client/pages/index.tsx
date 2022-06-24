import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Trash from '../assets/images/trash.png'

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

interface ListData {
  items: {id: number, name: string, cost: number}[]
}

export default function Home({ prop }: {prop: {id: number, name: string, cost: number}[]}) {
  const [newName, setNewName] = useState('')
  const [newCost, setNewCost] = useState('-1')

  return (
    <div className='background'>
      <h1>Shopping List</h1>

      <nav>
        <ul>
          {
            prop.map((item: {id: number, name: string, cost: number}) => {
              return (
                <li key={item.id}>
                  <div className='item'>
                    <div style={{display:'flex', flexDirection:'column', width:'50vw', justifyContent:'center'}}>
                      <p>{item.name}</p>
                      <p>${item.cost}</p>
                    </div>

                    <button onClick={(e) => DeleteItem(item.id)}>
                      <Image src={Trash} width='75px' height='75px' alt='Delete'/>
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

      <div className='footer' />
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/item')
  const listInfo = await response.json()
  const data = listInfo.data

  if (!data) { return { props: {prop: []}} }

  return {
    props: {
      prop: data
    }
  }
}
