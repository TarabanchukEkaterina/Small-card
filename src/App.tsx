import styled from "styled-components";
import Card from "./components/Card.styled";
import { MyTheme } from './styles/MyTheme.styled';

import city from './styles/pictures/city.svg'
import desert from './styles/pictures/desert.svg'
import fire from './styles/pictures/fire.svg'
import northernLights from './styles/pictures/northernLights.svg'

function App() {
  
  return ( 
    <StyledCollectionCard>
      <Card color1={MyTheme.colors.fourth} image1={northernLights} colHover={MyTheme.colors.hoverColors.fourthHover}/>
      <Card color1={MyTheme.colors.primary} image1={desert} colHover={MyTheme.colors.hoverColors.primaryHover}/>
      <Card color1={MyTheme.colors.secondary} image1={city} colHover={MyTheme.colors.hoverColors.secondaryHover}/>
      <Card color1={MyTheme.colors.third} image1={fire} colHover={MyTheme.colors.hoverColors.thirdHover}/>
    </StyledCollectionCard>
  )
}

export default App;

const StyledCollectionCard = styled.div`
  padding: 20px;
  background-color: #67aa7f;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

@media ${MyTheme.media.laptop} {
  flex-direction: column;
}

`