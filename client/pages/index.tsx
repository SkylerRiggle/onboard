import type { NextPage } from 'next'
import Image from 'next/image'
import Popup from 'reactjs-popup';
import Trash from '../assets/images/trash.png'

const Home: NextPage = () => {
  return (
    <div className='background'>
      <h1>Shopping List</h1>

      <nav>
        <ul>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </ul>
      </nav>

      <Popup trigger={<button>ADD ITEM</button>} position='top center'>
          <div className='popup'>
            <p>Input Item Information:</p>
            
            <div>
              <label>Name: </label>
              <input type="text" />
            </div>

            <div>
              <label>Cost: </label>
              <input type="number" />
            </div>

            <button onClick={(e) => console.log("ADD")}>ADD</button>
          </div>
        </Popup>

      <div className='footer'>
        <h2>TOTAL: $</h2>
        <h2>00.00</h2>
      </div>
    </div>
  )
}

const ListItem: NextPage = () => {
  return (
    <div className='item'>
      <div style={{display:'flex', flexDirection:'column', width:'50vw', justifyContent:'center'}}>
        <p className='name'>NAME</p>
        <p className='cost'>$COST</p>
      </div>

      <button onClick={(e) => console.log("DELETE")}>
        <Image src={Trash} width='75px' height='75px'/>
      </button>
    </div>
  )
}

export default Home
