import React from 'react'
import { Container } from './Home_styles'
import TitleComp from '../../Components/Title/'
import ButtonComp from "../../Components/Button"
import { useNavigate } from 'react-router-dom'

const Home = () => {
     const navigate = useNavigate();
  return (
    <Container>
          <TitleComp text={"Home"} fontSize={50}/>
          <ButtonComp text={"Go back"} width={30} height={7} onClick={() => navigate("/")}/>
    </Container>
  )
}

export default Home
