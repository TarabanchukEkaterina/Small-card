import {BoxModel} from './components/BoxModel.styled'
import {ContentBox} from './components/ContentBox.styled'
import {HeaderOne, HeaderTwo} from './components/Header.styled'
import {Button} from './components/Botton.styled'
import {Image} from './components/Image.styled'
import {Fog} from './components/Image.styled'

import desert from './styles/pictures/desert.svg'

function App() {

  return ( 
      <BoxModel>
        <div>
          <Fog></Fog>
          <Image src={desert} alt="Desert"/>
        </div>
        <ContentBox>
          <HeaderOne>Headline</HeaderOne>
          <HeaderTwo>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</HeaderTwo>
            <div>
              <Button btnType={'primary'}>See more</Button>
              <Button btnType={'outlined'}>Save</Button>
            </div> 
        </ContentBox>
      </BoxModel>
  )
}

export default App;