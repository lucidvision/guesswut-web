import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'GuessWut'}</p>
      <p className={slogan}>{'Gamify your life'}</p>
    </div>
  )
}
