import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Tous les mangas</h1>
        <div className='allmangas'>
          <div>
            <img className="imgKaiju" alt="Kaiju" src="../../src/assets/Kaiju.png" />
            <p>Kaiju</p>
            <p>N°8 TO8</p>
            <p>6,99€</p>
          </div>
          <div>
            <img className="imgKaiju" alt="Kaiju" src="../../src/assets/demonslayer.png" />
            <p>Demon Slayer</p>
            <p>Edition Pilier T01</p>
            <p>21,99€</p>
          </div>
          <div>
            <img className="imgKaiju" alt="Kaiju" src="../../src/assets/OnePiece.png" />
            <p>One Piece</p>
            <p>Edition originale - Tome 99</p>
            <p>6,99€</p>
          </div>
          <div>
            <img className="imgKaiju" alt="Kaiju" src="../../src/assets/BlueLock.png" />
            <p>Blue Lock</p>
            <p>T01</p>
            <p>7,20€</p>
          </div>
        </div>
        <h1>One Piece</h1>
        <div>
          <p>One Piece</p>
          <p>One Piece</p>
          <p>One Piece</p>
          <p>One Piece</p>
        </div>
      </div>
    </>
  )
}

export default App
