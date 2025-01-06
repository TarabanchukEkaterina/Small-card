import {BoxModel} from './BoxModel.styled'
import {ContentBox} from './ContentBox.styled'
import {HeaderOne, HeaderTwo} from './Header.styled'
import {StyledButton} from './Botton.styled'
import {Image} from './Image.styled'
import styled from 'styled-components'

function Card(props: any) {

  return ( 
      <BoxModel>
        <ImageConteiner>
          <Image src={props.image1} alt="Desert"/>
        </ImageConteiner>
        <ContentBox>
          <HeaderOne>Headline</HeaderOne>
          <HeaderTwo>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</HeaderTwo>
            <ButtonConteiner>
              <StyledButton btnType={'filled'} color={props.color1} colorHover={props.colHover}>See more</StyledButton>
              <StyledButton btnType={'outlined'} color={props.color1} colorHover={props.colHover}>Save</StyledButton>
            </ButtonConteiner> 
        </ContentBox>
      </BoxModel>
  )
}

export default Card;

const ImageConteiner = styled.div`
  overflow: hidden;/* скроет все, что выходит за пределы контейнера. */
  width: 280px;
  height: 170px;
`
const ButtonConteiner = styled.div`
  display: flex;
  gap: 10px;
`