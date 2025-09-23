import React from 'react'
import Counter from './components/Counter'
import StudentManager from './components/StudentManager'
import RanDom from "./components/RanDom"
import Dark from './components/Dark'
import ListMode from './components/ListMode'
import Menu from './components/Menu'
import Language from './components/Language'
import Favorites from './components/Favorites'
export default function App() {
  return (
    <div>
      <Counter></Counter>
    <hr />
    <StudentManager></StudentManager>
    <hr />
     <RanDom></RanDom> 
     <hr />
     <Dark></Dark>
     <hr />
     <ListMode></ListMode>
     <hr />
      <Menu></Menu> 
     <hr />
     <Language></Language> 
     <hr />
      <Favorites></Favorites>  
    </div>
    
  )
}
