import React from 'react'
import BtnAdd from './modules/BtnAdd'
import Titlem from './modules/Titlem'
import AnimatedPage from './AnimatedPage'
import ListMods from './modules/ListMods'

function Modules() {
  return (
    <AnimatedPage>
    <div>
      <Titlem/>
      <BtnAdd/>
      <ListMods/>
    </div>
    </AnimatedPage>
  )
}

export default Modules
