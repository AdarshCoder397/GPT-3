import React from 'react'
import './App.css'

import {Blog,Possibility,Features,Whatgpt3,Header} from './containers/index'
import {Cta,Brand,Navbar} from './components/index'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
    </div>
  )
}

export default App