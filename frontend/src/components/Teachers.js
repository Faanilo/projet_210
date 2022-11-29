import React from 'react'
import AnimatedPage from './AnimatedPage'
import TitleTeach from '../components/Teachers/TitleTeach'
import ListTeach from './Teachers/ListTeach'
import BtnAddT from './Teachers/BtnAddT'

function Teachers() {
  return (
    <AnimatedPage>
    <TitleTeach/>
    <BtnAddT/>
    <ListTeach/>
    </AnimatedPage>
  )
}

export default Teachers