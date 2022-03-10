import React from 'react'

import unitedImg from '../../assets/united.png'

import { Container , Image ,Title,Foundation} from './styles'
export function Card() {
  return (
    <Container>
      <Image
       source={unitedImg} 
       resizeMode='contain'
       animation="pulse"
       delay={100}
       iterationCount="infinite"
       />
       <Title> Manchester United</Title>
       <Foundation>1878</Foundation>
    </Container>

  )
}