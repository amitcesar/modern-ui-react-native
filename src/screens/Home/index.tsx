import React from 'react'

import { Container, Header,Content } from './styles'
import {Input} from '../../components/Input'
import { Card} from '../../components/Card'
import coverImg from '../../assets/cover.png'
export default function Home() {
  return (
    <Container>
     <Header source={coverImg}>
      <Input placeholder="Digite Aqui"/>
      </Header>

       <Content>
         <Card />
       </Content>
      
    </Container>
  )
}