import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [flip, setFlip] = useState(1)
  const [coinSide, setcoinSide] = useState([
    {
      side: "Head",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp71d9QxmHdPMRGrKWkNSQ1zmm4Jr433oqQw&usqp=CAU"
    },
    {
      side: "Tail",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYQEGmuiV3iPsz6AMJ4TPrnfuEJjMT878Og&usqp=CAU"
    }
  ])


  function getHeadOrTail() {
    const result = Math.round(Math.random())
    setFlip(result)
  }
  return (
    <div className="App">
      <h1>Flip a coin game</h1>
      <div className='flip-a-coin'>
        <ul>
          {
            coinSide.map(side => (
              <li>
                <img src={side.image} />
              </li>
            ))
          }
        </ul>
        <button
          onClick={() => {
            getHeadOrTail()
          }}
        >
          Flip
        </button>
      </div>
      <div>
        <h1>
          {flip === 1 ? "Head" : "Tail"}
        </h1>
      </div>
    </div>
  )
}

export default App
