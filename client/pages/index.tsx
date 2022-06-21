import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='background'>
      <h1>Shopping List</h1>

      <nav>
        <ul>
          <li>ITEM</li>
        </ul>
      </nav>

      <div className='footer'>
        <h2>TOTAL: $</h2>
        <h2>00.00</h2>
      </div>
    </div>
  )
}

export default Home
