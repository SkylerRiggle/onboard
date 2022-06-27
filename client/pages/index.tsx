import Image from 'next/image'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Trash from '../assets/images/trash.png'

/**
 * @name CreateItem
 * @description Creates a new item for the list
 * 
 * @param name The name of the new item
 * @param cost The cost of the new item
 */
async function CreateItem(name: string, cost: number) {
  //Remove leading and trailing white space
  //Accounts for space-only and indented names
  name = name.trim()

  //Invalid input case
  if (name.length === 0 || cost < 0) {
    alert('Invalid Input!')
    return
  }

  //Create a new item with a set name and cost using the client api route
  const response = await fetch('api/item/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, cost})
  })

  //POST error case
  if (!response.ok) {
    alert('Error adding item: Please try again.')
    return
  }

  //Refresh the page to update the display
  window.location.reload()
}

/**
 * @name DeleteItem
 * @description Deletes an item with a specified id from the list
 * 
 * @param id The id of the item to delete
 */
async function DeleteItem(id: number) {
  //Delete the item with a specified id using the client api route
  const response = await fetch('api/item/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  })

  //POST error case
  if (!response.ok) {
    alert('Error deleting item: Please try again.')
    return
  }

  //Refresh the page to update the display
  window.location.reload()
}

export default function Home({ prop }: {prop: {id: number, name: string, cost: number}[]}) {
  //New item data storage
  const [newName, setNewName] = useState('')
  const [newCost, setNewCost] = useState('-1')

  //Collect a total for the shopping list
  let total = 0
  prop.forEach(item => {
    total += item.cost
  });

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

      <div className='footer'>
        <h2>Total: ${Math.round(total * 100) / 100}</h2>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  //Gather data from the client api route
  const response = await fetch('http://localhost:3000/api/item')
  const listInfo = await response.json()
  const data = listInfo.data

  //Data not found case
  if (!data) { return { props: {prop: []}} }

  //Data found case
  return {
    props: {
      prop: data
    }
  }
}
