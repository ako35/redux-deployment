import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Content = () => {
  const languageState = useSelector((state) => state.language)

  const localeFile = require(`../utils/languages/${languageState.language}.json`)
  return (
    <Container className='mt-5'>
      <h1>{localeFile.trivialInfo.welcome}</h1>
      <h2>{localeFile.trivialInfo.aboutUs}</h2>
      <h3>{localeFile.trivialInfo.contact}</h3>
    </Container>
  )
}

export default Content