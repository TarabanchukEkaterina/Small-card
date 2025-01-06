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
      <Card colorBtn={MyTheme.colors.fourth} image={northernLights} colorHover={MyTheme.colors.hoverColors.fourthHover}/>
      <Card colorBtn={MyTheme.colors.primary} image={desert} colorHover={MyTheme.colors.hoverColors.primaryHover}/>
      <Card colorBtn={MyTheme.colors.secondary} image={city} colorHover={MyTheme.colors.hoverColors.secondaryHover}/>
      <Card colorBtn={MyTheme.colors.third} image={fire} colorHover={MyTheme.colors.hoverColors.thirdHover}/>
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